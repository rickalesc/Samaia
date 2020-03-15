package com.samaia.samaiaapppessoafisica.helper;

public class ValidaCPF {
    
	public static boolean validaCpfComNumerosRepetidos(String strCpf) {
		String[] cpfArray = strCpf.replace(".","").replace("-","").split("");
		for(int i=0;i<cpfArray.length-1;i++) {
			if(!cpfArray[i].equals(cpfArray[i+1])) {
				return validaCpf(strCpf);
			}
		}
		return false;
	}

	public static boolean validaCpf(String strCpf) {
		if (!strCpf.substring(0, 1).equals("") && strCpf.length() == 11) {
			try {
				int somaDigitoUm, somaDigitoDois;
				somaDigitoUm = somaDigitoDois = 0;
				int digitoUm, digitoDois;
				digitoUm = digitoDois = 0;

				strCpf = strCpf.replace(".", "").replace("-", "");

				for (int nCount = 1; nCount < strCpf.length() - 1; nCount++) {
					int digitoCpf = Integer.valueOf(strCpf.charAt(nCount - 1)).intValue();
					
					somaDigitoUm = somaDigitoUm + (11 - nCount) * digitoCpf;
					somaDigitoDois = somaDigitoDois + (12 - nCount) * digitoCpf;
				}
				digitoUm = getDigito(somaDigitoUm);
				somaDigitoDois += 2 * digitoUm;
				digitoDois= getDigito(somaDigitoDois);

				String nDigVerific = strCpf.substring(strCpf.length() - 2, strCpf.length());
				String nDigResult = String.valueOf(digitoUm) + String.valueOf(digitoDois);

				return nDigVerific.equals(nDigResult);
			} catch (Exception e) {
				return false;
			}
		} else
			return false;
	}

	private static int getDigito(int somaDigito) {
		int resto = somaDigito % 11;
		if (resto < 2)
			return 0;
		else
			return 11 - resto;
	}
}
