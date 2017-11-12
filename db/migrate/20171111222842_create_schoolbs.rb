class CreateSchoolbs < ActiveRecord::Migration[5.1]
  def change
    create_table :schoolbs do |t|
      t.decimal :idschool
      t.decimal :longitude
      t.decimal :latitude
      t.decimal :codesc
      t.string :codesctx
      t.string :nomeesc
      t.string :nomemun
      t.decimal :codmun
      t.string :nomdist
      t.decimal :coddist
      t.decimal :cod_sc
      t.string :cod_dep
      t.string :tip_dep
      t.string :bairro
      t.string :cep
      t.string :end_esc
      t.string :num_esc
      t.string :ddd
      t.string :telefone
      t.decimal :localiza
      t.decimal :lab_inf
      t.decimal :qd_esp_c
      t.decimal :qd_esp_d
      t.decimal :biblio
      t.decimal :ens_reg
      t.decimal :reg_in_cr
      t.decimal :reg_in_pe
      t.decimal :reg_fu_8a
      t.decimal :reg_fu_9a
      t.decimal :reg_med
      t.decimal :reg_med_i
      t.decimal :reg_med_n
      t.decimal :reg_med_p
      t.decimal :ens_esp
      t.decimal :esp_in_cr
      t.decimal :esp_in_pe
      t.decimal :esp_fu_8a
      t.decimal :esp_fu_9a
      t.decimal :esp_med
      t.decimal :esp_med_i
      t.decimal :esp_med_n
      t.decimal :esp_med_p
      t.decimal :esp_eja_f
      t.decimal :esp_eja_m
      t.decimal :eja
      t.decimal :eja_fund
      t.decimal :eja_med
      t.decimal :eja_proj
      t.decimal :ap5ef_07
      t.decimal :ap9ef_07
      t.decimal :ap3em_07
      t.decimal :ab1em_07
      t.decimal :ap5ef_08
      t.decimal :ap9ef_08
      t.decimal :ap3em_08
      t.decimal :ab1em_08
      t.decimal :ap5ef_09
      t.decimal :ap9ef_09
      t.decimal :ap3em_09
      t.decimal :ab1em_09
      t.decimal :ap5ef_10
      t.decimal :ap9ef_10
      t.decimal :ap3em_10
      t.decimal :ab1em_10
      t.decimal :ap5ef_11
      t.decimal :ap9ef_11
      t.decimal :apr3em_11
      t.decimal :ab1em_11
      t.decimal :ap5ef_12
      t.decimal :ap9ef_12
      t.decimal :ap3em_12
      t.decimal :ab1em_12
      t.decimal :ap5ef_13
      t.decimal :ap9ef_13
      t.decimal :ap3em_13
      t.decimal :ab1em_13
      t.decimal :ap5ef_14
      t.decimal :ap9ef_14
      t.decimal :ap3em_14
      t.decimal :ab1em_14
      t.decimal :di3em_07
      t.decimal :di3em_08
      t.decimal :di3em_09
      t.decimal :di3em_10
      t.decimal :di3em_11
      t.decimal :di3em_12
      t.decimal :di3em_13
      t.decimal :di3em_14
      t.decimal :mat05_ai
      t.decimal :lp05_ai
      t.decimal :np05_ai
      t.decimal :mat07_ai
      t.decimal :lp07_ai
      t.decimal :np07_ai
      t.decimal :mat09_ai
      t.decimal :lp09_ai
      t.decimal :np09_ai
      t.decimal :mat11_ai
      t.decimal :lp11_ai
      t.decimal :np11_ai
      t.decimal :mat13_ai
      t.decimal :lp13_ai
      t.decimal :np13_ai
      t.decimal :ideb05ai
      t.decimal :ideb07ai
      t.decimal :ideb09ai
      t.decimal :ideb11ai
      t.decimal :ideb13ai
      t.decimal :mat05_af
      t.decimal :lp05_af
      t.decimal :np05_af
      t.decimal :mat07_af
      t.decimal :lp07_af
      t.decimal :np07_af
      t.decimal :mat09_af
      t.decimal :lp09_af
      t.decimal :np09_af
      t.decimal :mat11_af
      t.decimal :lp11_af
      t.decimal :np11_af
      t.decimal :mat13_af
      t.decimal :lp13_af
      t.decimal :np13_af
      t.decimal :ideb05af
      t.decimal :ideb07af
      t.decimal :ideb09af
      t.decimal :ideb11af
      t.decimal :ideb13af
      t.decimal :red_en13
      t.decimal :lc_en13
      t.decimal :mat_en13
      t.decimal :ch_en13
      t.decimal :cn_en13
      t.decimal :enem2013
      t.decimal :inse_ab
      t.string :inse_cl

      t.timestamps
    end
  end
end