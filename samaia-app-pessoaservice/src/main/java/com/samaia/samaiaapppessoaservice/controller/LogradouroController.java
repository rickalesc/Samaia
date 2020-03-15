package com.samaia.samaiaapppessoaservice.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.samaia.samaiaapppessoaservice.exceptions.ResourceNotFoundException;
import com.samaia.samaiaapppessoaservice.model.LogradouroModel;
import com.samaia.samaiaapppessoaservice.repository.LogradouroRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LogradouroController {
	@Autowired
    private LogradouroRepository logradouroRepository;

    @GetMapping("/logradouros")
    public Page<LogradouroModel> getLogradouros(Pageable pageable) {
        return logradouroRepository.findAll(pageable);
    }

    @PostMapping("/logradouros")
    public LogradouroModel createLogradouro(@Valid @RequestBody LogradouroModel telefone) {
        return logradouroRepository.save(telefone);
    }

    @PutMapping("/logradouros/{logradouroId}")
    public LogradouroModel updateLogradouro(@PathVariable Long logradouroId,
                                   @Valid @RequestBody LogradouroModel logradouroRequest) {
        return logradouroRepository.findById(logradouroId)
                .map(logradouro -> {
                	logradouro.setLogradouro(logradouroRequest.getLogradouro());
                	logradouro.setBairro(logradouroRequest.getBairro());
                	logradouro.setCep(logradouroRequest.getCep());
                	logradouro.setCidade(logradouroRequest.getCidade());
                	logradouro.setUf(logradouroRequest.getUf());
                    return logradouroRepository.save(logradouro);
                }).orElseThrow(() -> new ResourceNotFoundException("Logradouro não encontrado " + logradouroId));
    }


    @DeleteMapping("/logradouros/{logradouroId}")
    public ResponseEntity<?> deleteLogradouro(@PathVariable Long logradouroId) {
        return logradouroRepository.findById(logradouroId)
                .map(logradouro -> {
                	logradouroRepository.delete(logradouro);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Logradouro não encontrado " + logradouroId));
    }
}
