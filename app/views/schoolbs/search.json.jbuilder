json.schoolbs @schoolbs do |schoolb|
  json.ID         schoolb.idschool
  json.CODESC     schoolb.codesc
  json.NO_ENTIDAD schoolb.nomeesc
  json.BAIRRO     schoolb.bairro
  json.ENDERECO   schoolb.end_esc
  json.NUMERO     schoolb.num_esc
  json.AB1EM_14   schoolb.ab1em_14
  json.AP3EM_14   schoolb.ap3em_14
  json.ENEM2013   schoolb.enem2013
  json.RANKING    schoolb.ranking
  json.lon        schoolb.longitude
  json.lat        schoolb.latitude
end