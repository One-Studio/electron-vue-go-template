package api

import (
	"github.com/gogf/gf/net/ghttp"
	
	"archive/zip"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"io"
	"errors"
)

func getCurrentPath() (string, error) {
	file, err := exec.LookPath(os.Args[0])
	if err != nil {
		return "", err
	}
	path, err := filepath.Abs(file)
	if err != nil {
		return "", err
	}
	i := strings.LastIndex(path, "/")
	if i < 0 {
		i = strings.LastIndex(path, "\\")
	}
	if i < 0 {
		return "", errors.New(`error: Can't find "/" or "\".`)
	}
	return string(path[0 : i+1]), nil
}

func Zip(srcFile string, destZip string) error {
	zipfile, err := os.Create(destZip)
	if err != nil {
		return err
	}
	defer zipfile.Close()
	archive := zip.NewWriter(zipfile)
	defer archive.Close()
	filepath.Walk(srcFile, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}
		header.Name = strings.TrimPrefix(path, filepath.Dir(srcFile) + "/")
		// header.Name = path
		if info.IsDir() {
			header.Name += "/"
		} else {
			header.Method = zip.Deflate
		}
		writer, err := archive.CreateHeader(header)
		if err != nil {
			return err
		}
		if !info.IsDir() {
			file, err := os.Open(path)
			if err != nil {
				return err
			}
		defer file.Close()
		_, err = io.Copy(writer, file)
		}
		return err
	})
	return err
}

func Unzip(zipFile string, destDir string) error {
	zipReader, err := zip.OpenReader(zipFile)
	if err != nil {
		return err
	}
	defer zipReader.Close()
	for _, f := range zipReader.File {
		fpath := filepath.Join(destDir, f.Name)
		if f.FileInfo().IsDir() {
			os.MkdirAll(fpath, os.ModePerm)
		} else {
			if err = os.MkdirAll(filepath.Dir(fpath), os.ModePerm); err != nil {
				return err
			}
			inFile, err := f.Open()
			if err != nil {
				return err
			}
			defer inFile.Close()
			outFile, err := os.OpenFile(fpath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
			if err != nil {
				return err
			}
			defer outFile.Close()
			_, err = io.Copy(outFile, inFile)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

func saveGameSettings() string{
	configPath := "H:\\Program Files\\Steam\\userdata\\885105352\\730\\local\\cfg"
	savePath, err := getCurrentPath()
	if(err!=nil){
		return "getCurrentPath failed"
	}
	err = Zip(configPath, savePath + "Save.zip")
	if(err!=nil){
		return "saveGameSettings failed"
	}
	return "saveGameSettings Done"
}

func loadGameSettings() string{
	configPath := "H:\\Program Files\\Steam\\userdata\\885105352\\730\\local\\cfg"
	loadPath, err := getCurrentPath()
	if(err!=nil){
		return "getCurrentPath failed"
	}
	err = Unzip(loadPath + "Save.zip", configPath)
	if(err!=nil){
		return "loadGameSettings failed"
	}
	return "loadGameSettings Done"
}

var SaveSettings = saveSettingsApi{}
type saveSettingsApi struct {}
func (*saveSettingsApi) Index(r *ghttp.Request) {

	r.Response.WritelnExit(saveGameSettings())
}

var LoadSettings = loadSettingsApi{}
type loadSettingsApi struct {}
func (*loadSettingsApi) Index(r *ghttp.Request) {

	r.Response.WritelnExit(loadGameSettings())
}
