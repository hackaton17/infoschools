class SchoolbsController < ApplicationController
  #before_action :set_schoolb, only: [:show, :update, :destroy]


  def search
    aux = "%" + params[:txt] + "%"

    @schoolbs = Schoolb.where("nomeesc ILIKE :part",{:part => aux}) #.find_by_sql(query)
  end
  # GET /schoolbs
  # GET /schoolbs.json
  def index
    @schoolbs = Schoolb.all
  end

  # GET /schoolbs/1
  # GET /schoolbs/1.json
  def show
    #query = "SELECT * FROM ( SELECT row_number() OVER (ORDER BY enem2013 nulls last) as ranking, idschool,codesc,nomeesc,bairro,end_esc"
    #query = query + ",num_esc,ab1em_14,ap3em_14,enem2013,longitude,latitude FROM schoolbs"
    #query = query + " ORDER BY enem2013 ) x "
    #query = query + " WHERE x.idschool = " + params[:id]
    query = "SELECT * FROM (SELECT row_number() OVER (ORDER BY s.enem2013 DESC nulls last) as ranking,"
    query = query + " idschool,codesc,nomeesc,bairro,end_esc,num_esc,ab1em_14,ap3em_14,enem2013,nomemun,telefone,cep,"
    query = query + " CASE WHEN biblio>0 THEN 'SIM' ELSE 'NÃO' END as id_biblio,"
    query = query + " CASE WHEN lab_inf>0 THEN 'SIM' ELSE 'NÃO' END as id_lab_inf,"
    query = query + " longitude,latitude FROM schoolbs s) t1 LEFT JOIN ( SELECT schoolb_id, NULLIF(AVG(value),0.0)"
    query = query + " as stars FROM qualifications GROUP BY schoolb_id) t2 ON t1.idschool = t2.schoolb_id"
    query = query + " WHERE t1.idschool = " + params[:id]
    @schoolb = Schoolb.find_by_sql(query)
  end

  # returns the list of all the
  def list
    #query = "SELECT row_number() OVER (ORDER BY enem2013 nulls last) as ranking, idschool,codesc,nomeesc,bairro,end_esc"
    #query = query + ",num_esc,ab1em_14,ap3em_14,enem2013,longitude,latitude FROM schoolbs"
    #query = query + " ORDER BY enem2013"
    query = "SELECT * FROM (SELECT row_number() OVER (ORDER BY s.enem2013 DESC nulls last) as ranking,"
    query = query + " idschool,codesc,nomeesc,bairro,end_esc,num_esc,ab1em_14,ap3em_14,enem2013,nomemun,telefone,cep,"
    query = query + " CASE WHEN biblio>0 THEN 'SIM' ELSE 'NÃO' END as id_biblio,"
    query = query + " CASE WHEN lab_inf>0 THEN 'SIM' ELSE 'NÃO' END as id_lab_inf,"
    query = query + " longitude,latitude FROM schoolbs s) t1 LEFT JOIN ( SELECT schoolb_id, NULLIF(AVG(value),0.0)"
    query = query + " as stars FROM qualifications GROUP BY schoolb_id) t2 ON t1.idschool = t2.schoolb_id"
    @schoolbs = Schoolb.find_by_sql(query)
  end

  # returns all the schools with a calification in a given interval,
  def intervals
    #query = "SELECT idschool,codesc,nomeesc,bairro,end_esc"
    #query = query + ",num_esc,ab1em_14,ap3em_14,enem2013,longitude,latitude FROM schoolbs"
    query = "SELECT * FROM (SELECT row_number() OVER (ORDER BY s.enem2013 DESC nulls last) as ranking,"
    query = query + " idschool,codesc,nomeesc,bairro,end_esc,num_esc,ab1em_14,ap3em_14,enem2013,nomemun,telefone,cep,"
    query = query + " CASE WHEN biblio>0 THEN 'SIM' ELSE 'NÃO' END as id_biblio,"
    query = query + " CASE WHEN lab_inf>0 THEN 'SIM' ELSE 'NÃO' END as id_lab_inf,"
    query = query + " longitude,latitude FROM schoolbs s) t1 LEFT JOIN ( SELECT schoolb_id, NULLIF(AVG(value),0.0)"
    query = query + " as stars FROM qualifications GROUP BY schoolb_id) t2 ON t1.idschool = t2.schoolb_id"
    query = query + " WHERE t1." + params[:test] + " >= " + params[:lo] + " AND t1." + params[:test] + " <= " + params[:hi];
    #render html: query
    @schoolbs = Schoolb.find_by_sql(query)
  end

  # POST /schoolbs
  # POST /schoolbs.json
  def create
    @schoolb = Schoolb.new(schoolb_params)

    if @schoolb.save
      render :show, status: :created, location: @schoolb
    else
      render json: @schoolb.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /schoolbs/1
  # PATCH/PUT /schoolbs/1.json
  def update
    if @schoolb.update(schoolb_params)
      render :show, status: :ok, location: @schoolb
    else
      render json: @schoolb.errors, status: :unprocessable_entity
    end
  end

  # DELETE /schoolbs/1
  # DELETE /schoolbs/1.json
  def destroy
    @schoolb.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_schoolb
      @schoolb = Schoolb.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def schoolb_params
      params.require(:schoolb).permit(:idSchool, :longitude, :latitude, :codesc, :codesctx, :nomeesc, :nomemun, :codmun, :nomdist, :coddist, :cod_sc, :cod_dep, :tip_dep, :bairro, :cep, :end_esc, :num_esc, :ddd, :telefone, :localiza, :lab_inf, :qd_esp_c, :qd_esp_d, :biblio, :ens_reg, :reg_in_cr, :reg_in_pe, :reg_fu_8a, :reg_fu_9a, :reg_med, :reg_med_i, :reg_med_n, :reg_med_p, :ens_esp, :esp_in_cr, :esp_in_pe, :esp_fu_8a, :esp_fu_9a, :esp_med, :esp_med_i, :esp_med_n, :esp_med_p, :esp_eja_f, :esp_eja_m, :eja, :eja_fund, :eja_med, :eja_proj, :ap5ef_07, :ap9ef_07, :ap3em_07, :ab1em_07, :ap5ef_08, :ap9ef_08, :ap3em_08, :ab1em_08, :ap5ef_09, :ap9ef_09, :ap3em_09, :ab1em_09, :ap5ef_10, :ap9ef_10, :ap3em_10, :ab1em_10, :ap5ef_11, :ap9ef_11, :apr3em_11, :ab1em_11, :ap5ef_12, :ap9ef_12, :ap3em_12, :ab1em_12, :ap5ef_13, :ap9ef_13, :ap3em_13, :ab1em_13, :ap5ef_14, :ap9ef_14, :ap3em_14, :ab1em_14, :di3em_07, :di3em_08, :di3em_09, :di3em_10, :di3em_11, :di3em_12, :di3em_13, :di3em_14, :mat05_ai, :lp05_ai, :np05_ai, :mat07_ai, :lp07_ai, :np07_ai, :mat09_ai, :lp09_ai, :np09_ai, :mat11_ai, :lp11_ai, :np11_ai, :mat13_ai, :lp13_ai, :np13_ai, :ideb05ai, :ideb07ai, :ideb09ai, :ideb11ai, :ideb13ai, :mat05_af, :lp05_af, :np05_af, :mat07_af, :lp07_af, :np07_af, :mat09_af, :lp09_af, :np09_af, :mat11_af, :lp11_af, :np11_af, :mat13_af, :lp13_af, :np13_af, :ideb05af, :ideb07af, :ideb09af, :ideb11af, :ideb13af, :red_en13, :lc_en13, :mat_en13, :ch_en13, :cn_en13, :enem2013, :inse_ab, :inse_cl)
    end
end
