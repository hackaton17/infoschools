json.array! @schoolb do |schoolb|
  json.ID         schoolb.idschool
  json.CODESC     schoolb.codesc.to_s
  json.NO_ENTIDAD schoolb.nomeesc
  json.BAIRRO     schoolb.bairro
  json.CEP        schoolb.cep
  json.ENDERECO   schoolb.end_esc
  json.NOMEMUN    schoolb.nomemun
  json.SIGLA      'SP'
  json.NUMERO     schoolb.num_esc.to_i
  json.AB1EM_14   schoolb.ab1em_14.to_f
  json.AP3EM_14   schoolb.ap3em_14.to_f
  json.ENEM2013   schoolb.enem2013.to_f
  json.RANKING    schoolb.ranking
  json.TELEFONE   schoolb.telefone
  json.STARS      schoolb.stars.to_i
  json.ID_BIBLIOTECA schoolb.id_biblio
  json.ID_LABORATORIO_INFORMATICA schoolb.id_lab_inf
  json.lon        schoolb.longitude.to_f/1e6
  json.lat        schoolb.latitude.to_f/1e6
end
