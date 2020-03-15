package com.samaia.samaiaapplogradouro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samaia.samaiaapplogradouro.model.LogradouroModel;

public interface LogradouroRepository extends JpaRepository<LogradouroModel, Long> {

	List<LogradouroModel> findLogradouroById(Long logradouroId);
}
