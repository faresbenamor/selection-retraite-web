package com.selectionretraite.api;

import com.selectionretraite.api.proprety.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({FileStorageProperties.class})
public class SelectionretraiteApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(SelectionretraiteApiApplication.class, args);
    }

}
