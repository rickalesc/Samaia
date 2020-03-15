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
import com.samaia.samaiaapppessoaservice.model.TelefoneModel;
import com.samaia.samaiaapppessoaservice.repository.TelefoneRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TelefoneController {
	@Autowired
    private TelefoneRepository telefoneRepository;

    @GetMapping("/telefones")
    public Page<TelefoneModel> getTelefones(Pageable pageable) {
        return telefoneRepository.findAll(pageable);
    }

    @PostMapping("/telefones")
    public TelefoneModel createTelefone(@Valid @RequestBody TelefoneModel telefone) {
        return telefoneRepository.save(telefone);
    }

    @PutMapping("/telefones/{telefoneId}")
    public TelefoneModel updateTelefone(@PathVariable Long telefoneId,
                                   @Valid @RequestBody TelefoneModel telefoneRequest) {
        return telefoneRepository.findById(telefoneId)
                .map(telefone -> {
                    telefone.setNumero(telefoneRequest.getNumero());
                    telefone.setDdd(telefoneRequest.getDdd());
                    return telefoneRepository.save(telefone);
                }).orElseThrow(() -> new ResourceNotFoundException("Telefone não encontrado " + telefoneId));
    }


    @DeleteMapping("/telefones/{telefoneId}")
    public ResponseEntity<?> deleteTelefone(@PathVariable Long telefoneId) {
        return telefoneRepository.findById(telefoneId)
                .map(telefone -> {
                	telefoneRepository.delete(telefone);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Telefone não encontrado " + telefoneId));
    }
}
