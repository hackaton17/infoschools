class QualificationsController < ApplicationController

  # TODO: there is no way to update a comment or delete it.

  def list
    query = "SELECT * FROM schoolbs s LEFT JOIN ( SELECT schoolb_id,NULLIF(AVG(value),0.0) as stars FROM qualifications GROUP BY schoolb_id ) q"
    query = query + " ON s.idschool = q.schoolb_id WHERE s.idschool = " + params[:id]
    render html:  query
    #@qualification = Qualification.find_by_sql(query)
  end

end