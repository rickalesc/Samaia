package com.samaia.samaiaapppessoaservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="logradouro")
@Getter
@Setter
public class LogradouroModel extends AuditModel {
	@Id
	@GeneratedValue(generator = "logradouro_generator")
	@SequenceGenerator(
			name = "logradouro_generator", sequenceName = "logradouro_sequence",initialValue = 1
	)
	private Long id;
	
	@NotNull
	private Long pessoaId;

	@NotBlank
	@Column(length = 200)
	private String logradouro;

	@Column(length = 8)
	@Size(min = 8, max = 8)
	private String cep;
	
	@Column(length = 200)
	private String bairro;
	
	@Column(length = 200)
	private String cidade;
	
	@Column(length = 2)
	@Size(min = 2, max = 2)
	private String uf;
}
