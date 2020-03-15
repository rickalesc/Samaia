package com.samaia.samaiaapppessoaservice.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.samaia.samaiaapppessoaservice.model.TelefoneModel;

public interface TelefoneRepository extends JpaRepository<TelefoneModel, Long> {

	List<TelefoneModel> findTelefoneById(Long telefoneId);
}
