json.schoolbs @schoolbs do |schoolb|
  json.ID                 schoolb.idschool
  json.NO_ENTIDAD         schoolb.nomeesc
  json.NO_ENTIDAD_BAIRRO  schoolb.nomeesc + " - " + schoolb.bairro
end