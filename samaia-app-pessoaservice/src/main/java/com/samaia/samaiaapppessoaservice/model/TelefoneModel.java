package com.samaia.samaiaapppessoaservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="telefones")
@Getter
@Setter
public class TelefoneModel extends AuditModel {
	@Id
	@GeneratedValue(generator = "telefone_generator")
	@SequenceGenerator(
			name = "telefone_generator", sequenceName = "telefone_sequence",initialValue = 1
	)
	private Long id;

	@NotNull
	private Long pessoaId;
	
	@NotBlank
	@Column(length = 9)
	@Size(min = 8, max = 9)
	private String numero;

	@Column(length = 2)
	@Size(min = 2, max = 2)
	private String ddd;
}
