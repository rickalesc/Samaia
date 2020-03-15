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

import com.samaia.samaiaapppessoaservice.exceptions.InvalidCpfException;
import com.samaia.samaiaapppessoaservice.exceptions.ResourceNotFoundException;
import com.samaia.samaiaapppessoaservice.helper.ValidaCPF;
import com.samaia.samaiaapppessoaservice.model.PessoaFisicaModel;
import com.samaia.samaiaapppessoaservice.repository.PessoaFisicaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PessoaFisicaController {
	@Autowired
    private PessoaFisicaRepository pessoaFisicaRepository;

    @GetMapping("/pessoafisica")
    public Page<PessoaFisicaModel> getPessoasFisicas(Pageable pageable) {
        return pessoaFisicaRepository.findAll(pageable);
    }
    
    @GetMapping("/pessoafisica/{pessoaFisicaId}")
    public PessoaFisicaModel getPessoaFisica(@PathVariable Long pessoaFisicaId) {
    	return pessoaFisicaRepository.findById(pessoaFisicaId)
    	        .orElseThrow(() -> new ResourceNotFoundException("Pessoa Fisica não encontrada " + pessoaFisicaId));
    }

    @PostMapping("/pessoafisica")
    public PessoaFisicaModel createPessoaFisica(@Valid @RequestBody PessoaFisicaModel pessoaFisica) {
    	if(ValidaCPF.validaCpf(pessoaFisica.getCpf())) {
    		throw new InvalidCpfException("CPF " + pessoaFisica.getCpf() + " Inválido");
    	}
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    @PutMapping("/pessoafisica/{pessoaFisicaId}")
    public PessoaFisicaModel updatePessoaFisica(@PathVariable Long pessoaFisicaId,
                                   @Valid @RequestBody PessoaFisicaModel pessoaFisica) {
    	if(ValidaCPF.validaCpf(pessoaFisica.getCpf())) {
    		throw new InvalidCpfException("CPF " + pessoaFisica.getCpf() + " Inválido");
    	}
        return pessoaFisicaRepository.findById(pessoaFisicaId)
                .map(pessoa -> {
                	pessoa.setNome(pessoaFisica.getNome());
                	pessoa.setCpf(pessoaFisica.getCpf());
                	pessoa.setEmail(pessoaFisica.getEmail());
                	pessoa.setDataNascimento(pessoaFisica.getDataNascimento());
                    return pessoaFisicaRepository.save(pessoa);
                }).orElseThrow(() -> new ResourceNotFoundException("Pessoa Fisica não encontrada " + pessoaFisicaId));
    }

    @DeleteMapping("/pessoafisica/{pessoaFisicaId}")
    public ResponseEntity<?> deletePessoaFisica(@PathVariable Long pessoaFisicaId) {
        return pessoaFisicaRepository.findById(pessoaFisicaId)
                .map(pessoaFisica -> {
                	pessoaFisicaRepository.delete(pessoaFisica);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Pessoa Física não encontrada " + pessoaFisicaId));
    }
}
