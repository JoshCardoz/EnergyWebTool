export const parameterTemplates = {
  energySources: {
    renewableEnergySources: {
      elecGeneration: {
        PVArray: [
          { name: 'name', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'rated_power', type: 'float' },
          { name: 'efficiency', type: 'float' },
          { name: 'area', type: 'float' },
          { name: 'module', type: 'string' },
          { name: 'module_type', type: 'string' },
          { name: 'module_parameters', type: 'json' },
          { name: 'temperature_model_parameters', type: 'json' },
          { name: 'capacity', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'renewable_sources', type: 'string' }
        ],
        WT: [
          { name: 'name', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'hub_height', type: 'float' },
          { name: 'rotor_diameter', type: 'float' },
          { name: 'turbine_model', type: 'string' },
          { name: 'efficiency', type: 'float' },
          { name: 'power_curve', type: 'json' },
          { name: 'power_coefficient_curve', type: 'json' },
          { name: 'len_unit', type: 'string' },
          { name: 'spd_unit', type: 'string' },
          { name: 'pwr_unit', type: 'string' },
          { name: 'ctl_mode', type: 'string' },
          { name: 'rotor_ht', type: 'float' },
          { name: 'sensr_ht', type: 'float' },
          { name: 'sher_exp', type: 'float' },
          { name: 'turb_int', type: 'float' },
          { name: 'air_dens', type: 'float' },
          { name: 'pwr_ratd', type: 'float' },
          { name: 'spd_ratd', type: 'float' },
          { name: 'num_pair', type: 'int' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'renewable_sources', type: 'string' }
        ],
        FC: [
          { name: 'name', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'efficiency', type: 'float' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'renewable_sources', type: 'string' },
          { name: 'hydrogen_consumption_rate', type: 'float' },
          { name: 'operating_temperature', type: 'float' },
          { name: 'operating_pressure', type: 'float' },
          { name: 'power_output_curve', type: 'json' },
          { name: 'cathode_oxidant_type', type: 'int' },
          { name: 'modules_in_series_per_stack', type: 'int' },
          { name: 'stacks_in_parallel', type: 'int' },
          { name: 'electrode_area', type: 'float' },
          { name: 'faraday_efficiency', type: 'float' },
          { name: 'operating_voltage', type: 'float' },
          { name: 'tafel_slope', type: 'float' },
          { name: 'ohmic_resistance', type: 'float' },
          { name: 'min_cell_voltage', type: 'float' }
        ],
        Geothermal: [
          { name: 'name', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'efficiency', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'renewable_sources', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'geothermal_gradient', type: 'float' },
          { name: 'depth', type: 'float' },
          { name: 'flow_rate', type: 'float' }
        ],
        Biomass: [
          { name: 'name', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'efficiency', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'fuel_type', type: 'string' },
          { name: 'feedstock_characteristics', type: 'json' },
          { name: 'emission_rate', type: 'float' },
          { name: 'renewable_sources', type: 'string' }
        ]
        ,
        Hydro: [
          { name: 'name', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'efficiency', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'renewable_sources', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'water_flow_rate', type: 'float' },
          { name: 'head_height', type: 'float' },
          { name: 'turbine_efficiency', type: 'float' }
        ],
        WaterTreatmentPlant: [
          { name: 'capacity', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'efficiency', type: 'float' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'renewable_sources', type: 'string' },
          { name: 'power_consumption_per_m3', type: 'float' }
        ],       
        CHP: [
          { name: 'capacity', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'DC_AC_Out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'efficiency', type: 'float' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'fuel_type', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'emissions_rate', type: 'float' },
          { name: 'thermal_efficiency', type: 'float' },
          { name: 'electrical_efficiency', type: 'float' },
          { name: 'heat_output', type: 'float' },
          { name: 'power_output', type: 'float' }
        ],
        HydrogenBasedCPHS: [
          { name: 'capacity', type: 'decimal', precision: 10, scale: 2 },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'efficiency', type: 'decimal', precision: 5, scale: 2 },
          { name: 'operational_cost', type: 'decimal', precision: 10, scale: 2 },
          { name: 'installation_cost', type: 'decimal', precision: 10, scale: 2 },
          { name: 'maintenance_cost', type: 'decimal', precision: 10, scale: 2 },
          { name: 'capacity_factor', type: 'decimal', precision: 5, scale: 2 },
          { name: 'unit', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'text' },
          { name: 'renewable_sources', type: 'string' },
          { name: 'hydrogen_consumption_rate', type: 'decimal', precision: 10, scale: 2 },
          { name: 'water_consumption_rate', type: 'decimal', precision: 10, scale: 2 }
        ]
      },
      h2Generation: {
        Electrolyzer: [
          { name: 'name', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'efficiency', type: 'float' },
          { name: 'hydrogen_production_rate', type: 'float' },
          { name: 'operating_temperature', type: 'float' },
          { name: 'operating_pressure', type: 'float' },
          { name: 'power_to_hydrogen_curve', type: 'json' },
          { name: 'temperature_mode', type: 'string' },
          { name: 'electrode_area', type: 'float' },
          { name: 'cells_in_series', type: 'int' },
          { name: 'stacks_in_parallel', type: 'int' },
          { name: 'max_current_density', type: 'float' },
          { name: 'max_operating_temperature', type: 'float' },
          { name: 'min_cell_voltage', type: 'float' },
          { name: 'thermal_resistance', type: 'float' },
          { name: 'thermal_time_constant', type: 'float' },
          { name: 'electrolyzer_type', type: 'int' },
          { name: 'logical_unit', type: 'int' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'environmental_impact', type: 'string' },
          { name: 'renewable_sources', type: 'string' },
          { name: 'description', type: 'string' }
        ]
      }
    },
    nonRenewableEnergySources: {
      elecGeneration: {
        Generator: [
          { name: 'name', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'efficiency', type: 'float' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'fuel_type', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'emissions_rate', type: 'float' },
          { name: 'generator_efficiency', type: 'float' },
          { name: 'power_output', type: 'float' },
          { name: 'operating_hours', type: 'float' }
        ],
      },
      h2Generation: {
        SteamMethane: [
          { name: 'name', type: 'string' },
          { name: 'capacity', type: 'float' },
          { name: 'lifespan', type: 'int' },
          { name: 'dc_ac_out', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'size', type: 'string' },
          { name: 'model_type', type: 'string' },
          { name: 'efficiency', type: 'float' },
          { name: 'operational_cost', type: 'float' },
          { name: 'installation_cost', type: 'float' },
          { name: 'maintenance_cost', type: 'float' },
          { name: 'capacity_factor', type: 'float' },
          { name: 'unit', type: 'string' },
          { name: 'fuel_type', type: 'string' },
          { name: 'generation_type', type: 'string' },
          { name: 'emissions_rate', type: 'float' },
          { name: 'reformer_efficiency', type: 'float' },
          { name: 'hydrogen_production_rate', type: 'float' },
          { name: 'operating_hours', type: 'float' }
        ]        
      }
    }
  },
  energyStorage: {
    Battery: [
      { name: 'name', type: 'string' },
      { name: 'capacity', type: 'float' },
      { name: 'dc_ac_out', type: 'string' },
      { name: 'storage_efficiency', type: 'float' },
      { name: 'charge_efficiency', type: 'float' },
      { name: 'discharge_efficiency', type: 'float' },
      { name: 'state_of_charge', type: 'float' },
      { name: 'type', type: 'string' },
      { name: 'max_current_charge', type: 'float' },
      { name: 'max_current_discharge', type: 'float' },
      { name: 'max_charge_voltage', type: 'float' },
      { name: 'cells_in_parallel', type: 'int' },
      { name: 'cells_in_series', type: 'int' },
      { name: 'location', type: 'string' },
      { name: 'lifespan', type: 'int' },
      { name: 'description', type: 'string' }
    ],
    H2Tank:[
      { name: 'name', type: 'string' },
      { name: 'capacity', type: 'float' },
      { name: 'dc_ac_out', type: 'string' },
      { name: 'storage_efficiency', type: 'float' },
      { name: 'charge_efficiency', type: 'float' },
      { name: 'discharge_efficiency', type: 'float' },
      { name: 'state_of_charge', type: 'float' },
      { name: 'lifetime_cycles', type: 'int' },
      { name: 'max_charge_rate', type: 'float' },
      { name: 'max_discharge_rate', type: 'float' },
      { name: 'storage_pressure', type: 'float' },
      { name: 'location', type: 'string' },
      { name: 'lifespan', type: 'int' },
      { name: 'description', type: 'string' }
    ],
    Flywheel:[
      { name: 'name', type: 'string' },
      { name: 'capacity', type: 'float' },
      { name: 'dc_ac_out', type: 'string' },
      { name: 'storage_efficiency', type: 'float' },
      { name: 'charge_efficiency', type: 'float' },
      { name: 'discharge_efficiency', type: 'float' },
      { name: 'state_of_charge', type: 'float' },
      { name: 'rotational_speed', type: 'float' },
      { name: 'moment_of_inertia', type: 'float' },
      { name: 'mechanical_losses', type: 'float' },
      { name: 'location', type: 'string' },
      { name: 'lifespan', type: 'int' },
      { name: 'description', type: 'string' }
    ],
    Thermal:[
      { name: 'name', type: 'string' },
      { name: 'capacity', type: 'float' },
      { name: 'dc_ac_out', type: 'string' },
      { name: 'storage_efficiency', type: 'float' },
      { name: 'charge_efficiency', type: 'float' },
      { name: 'discharge_efficiency', type: 'float' },
      { name: 'state_of_charge', type: 'float' },
      { name: 'thermal_conductivity', type: 'float' },
      { name: 'temperature_range', type: 'json' },
      { name: 'heat_loss_coefficient', type: 'float' },
      { name: 'lifespan', type: 'int' },
      { name: 'location', type: 'string' },
      { name: 'description', type: 'string' }
    ],
  },
  energyConverter: [
    { name: 'name', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'capacity', type: 'float' },
    { name: 'efficiency', type: 'float' },
    { name: 'unit', type: 'string' },
    { name: 'installation_cost', type: 'float' },
    { name: 'maintenance_cost', type: 'float' },
    { name: 'lifespan', type: 'int' },
    { name: 'dc_ac_out', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'description', type: 'string' }
  ],
  energyLoad: [
    { name: 'name', type: 'string' },
    { name: 'Load Type', type: 'string' },
    { name: 'demand', type: 'float' }
  ],
  utilities: [
    { name: 'name', type: 'string' },
    { name: 'utility_type', type: 'string' },
    { name: 'demand', type: 'float' },
    { name: 'price_per_unit', type: 'float' },
    { name: 'location', type: 'string' },
    { name: 'emission_rate', type: 'float' },
    { name: 'billing_information', type: 'string' },
    { name: 'connection_type', type: 'string' },
    { name: 'capacity', type: 'float' },
    { name: 'tier', type: 'string' }
  ],
  organization: [
    { name: 'o_type', type: 'str' },
    { name: 'rules', type: 'str' },
    { name: 'rewards', type: 'list'}
  ]
};