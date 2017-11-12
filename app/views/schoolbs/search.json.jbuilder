json.array! @schoolbs do |schoolb|
  json.ID                 schoolb.idschool
  json.NO_ENTIDAD         schoolb.nomeesc
  json.NO_ENTIDAD_BAIRRO  schoolb.nomeesc + " - " + schoolb.bairro
  json.CODESC     schoolb.codesc.to_s
  json.BAIRRO     schoolb.bairro
  json.ENDERECO   schoolb.end_esc
  json.NUMERO     schoolb.num_esc.to_i
  json.AB1EM_14   schoolb.ab1em_14.to_f
  json.AP3EM_14   schoolb.ap3em_14.to_f
  json.ENEM2013   schoolb.enem2013.to_f
  json.NOMEMUN    schoolb.nomemun
  json.lon        schoolb.longitude.to_f/1e6
  json.lat        schoolb.latitude.to_f/1e6
end