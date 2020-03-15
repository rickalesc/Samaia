package com.samaia.samaiaapppessoaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SamaiaAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SamaiaAppApplication.class, args);
	}

}
