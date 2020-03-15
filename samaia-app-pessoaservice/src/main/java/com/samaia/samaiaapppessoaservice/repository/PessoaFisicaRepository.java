package com.samaia.samaiaapppessoaservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samaia.samaiaapppessoaservice.model.PessoaFisicaModel;

public interface PessoaFisicaRepository extends JpaRepository<PessoaFisicaModel, Long> {

	List<PessoaFisicaModel> findLogradouroById(Long pessoaFisicaId);
}
