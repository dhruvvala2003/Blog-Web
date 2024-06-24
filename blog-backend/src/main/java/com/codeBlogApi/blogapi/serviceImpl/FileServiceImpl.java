package com.codeBlogApi.blogapi.serviceImpl;

import com.codeBlogApi.blogapi.services.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    @Override
    public String uplodeImage(String path, MultipartFile file) throws IOException {

        String fileName=file.getOriginalFilename();

        String randomId= UUID.randomUUID().toString();

        String TmpfileName=randomId.concat(fileName.substring(fileName.lastIndexOf(".")));
        //full path
        String filePath= path + File.separator + TmpfileName;

        File f=new File(path);

        if(!f.exists())
        {
            f.mkdir();

        }

        Files.copy(file.getInputStream(), Paths.get(filePath));
        return TmpfileName;


    }

    @Override
    public InputStream getResource(String path, String fileName) throws FileNotFoundException {

        String fullPath=path + File.separator+fileName;
        InputStream i=new FileInputStream(fullPath);
        return i;

    }
}
