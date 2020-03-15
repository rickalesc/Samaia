package com.samaia.samaiaapppessoaservice.model;

import java.util.Calendar;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="pessoa_fisica")
@Getter
@Setter
public class PessoaFisicaModel extends AuditModel {
	@Id
	@GeneratedValue(generator = "pessoafisica_generator")
	@SequenceGenerator(
			name = "pessoafisica_generator", sequenceName = "pessoafisica_sequence",initialValue = 1
	)
	private Long id;

	@NotBlank
	@Column(length = 200)
	private String nome;

	@Column(length = 11)
	@Size(min = 11, max = 11)
	private String cpf;
	
	@Column(length = 200)
	private String email;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(length = 200)
	private Calendar dataNascimento;
}
