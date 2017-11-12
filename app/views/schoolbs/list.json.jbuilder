json.schoolbs @schoolbs do |schoolb|
  json.ID         schoolb.id
  json.CODESC     schoolb.codesc
  json.NO_ENTIDAD schoolb.nomeesc
  json.BAIRRO     schoolb.bairro
  json.ENDERECO   schoolb.end_esc
  json.NUMERO     schoolb.num_esc
  json.lon        schoolb.longitude
  json.lat        schoolb.latitude
end