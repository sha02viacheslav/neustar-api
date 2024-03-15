import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('neustartrackermapping')
export class NeustarTrackerMapping {
  @PrimaryColumn()
  carrier_id: string;

  @PrimaryColumn()
  tracker: string;

  @Column('text')
  carrier_name: string;

  @Column('text')
  sheet: string;

  @Column('int')
  header_row: number;

  @Column('text')
  payload_type: string;

  @Column('text')
  ap_region: string;

  @Column('text')
  pon: string;

  @Column('text')
  acna: string;

  @Column('text')
  lata: string;

  @Column('text')
  icsc: string;

  @Column('text')
  order_initiator: string;

  @Column('text')
  common_id: string;

  @Column('text')
  ddd: string;

  @Column('text')
  project_id: string;

  @Column('text')
  activity: string;

  @Column('text')
  service_type: string;

  @Column('text')
  pnum: string;

  @Column('text')
  exp: string;

  @Column('text')
  spec: string;

  @Column('text')
  site_id: string;

  @Column('text')
  site_survey_complete: string;

  @Column('text')
  site_requirements: string;

  @Column('text')
  site_requirements_complete: string;

  @Column('text')
  site_id_s: string;

  @Column('text')
  site_survey_complete_s: string;

  @Column('text')
  site_requirements_s: string;

  @Column('text')
  site_requirements_complete_s: string;

  @Column('text')
  error_reason: string;

  @Column('text')
  asr_no: string;

  @Column('text')
  project_manager: string;

  @Column('text')
  foc_remarks: string;

  @Column('text')
  provider_representative: string;

  @Column('text')
  provider_rep_email: string;

  @Column('text')
  ecckt: string;

  @Column('text')
  ref_num: string;

  @Column('text')
  order_number: string;

  @Column('text')
  order_action: string;

  @Column('text')
  order_workflow_status: string;

  @Column('text')
  order_jeopardy_reason: string;

  @Column('text')
  clo: string;

  @Column('text')
  vcid: string;

  @Column('text')
  vc_order_number: string;

  @Column('text')
  s_vlan: string;

  @Column('text')
  vc_order_workflow_status: string;

  @Column('text')
  order_type: string;

  @Column('text')
  circuit_type: string;

  @Column('text')
  circuit_speed: string;

  @Column('text')
  handoff_type: string;

  @Column('text')
  bandwidth: string;

  @Column('text')
  nni_id: string;

  @Column('text')
  nni_location: string;

  @Column('text')
  last_mile_provider_name: string;

  @Column('text')
  last_mile_provider_pon: string;

  @Column('text')
  last_mile_foc_issued_date: string;

  @Column('text')
  last_mile_provider_circuit_id: string;

  @Column('text')
  managed_asr: string;

  @Column('text')
  network_type: string;

  @Column('text')
  end_user: string;

  @Column('text')
  address: string;

  @Column('text')
  city: string;

  @Column('text')
  state: string;

  @Column('text')
  zip_code: string;

  @Column('text')
  lcon: string;

  @Column('text')
  special_construction: string;

  @Column('text')
  primary_location_clli: string;

  @Column('text')
  sub_location_1: string;

  @Column('text')
  sub_location_2: string;

  @Column('text')
  sub_location_3: string;

  @Column('text')
  entrance_facility_trial_customer_accepted: string;

  @Column('text')
  fiber_ready: string;

  @Column('text')
  nte_placed_ecd: string;

  @Column('text')
  nte_placed_acd: string;

  @Column('text')
  permits_required: string;

  @Column('text')
  permits_complete_date: string;

  @Column('text')
  hub_work_required: string;

  @Column('text')
  end_user_s: string;

  @Column('text')
  address_s: string;

  @Column('text')
  city_s: string;

  @Column('text')
  state_s: string;

  @Column('text')
  zip_code_s: string;

  @Column('text')
  lcon_s: string;

  @Column('text')
  special_construction_s: string;

  @Column('text')
  secondary_location_clli: string;

  @Column('text')
  sub_location_1_s: string;

  @Column('text')
  sub_location_2_s: string;

  @Column('text')
  sub_location_3_s: string;

  @Column('text')
  entrance_facility_trial_customer_accepted_s: string;

  @Column('text')
  fiber_ready_s: string;

  @Column('text')
  nte_placed_ecd_s: string;

  @Column('text')
  nte_placed_acd_s: string;

  @Column('text')
  permits_required_s: string;

  @Column('text')
  permits_complete_date_s: string;

  @Column('text')
  hub_work_required_s: string;

  @Column('text')
  build_complexity: string;

  @Column('text')
  scope_of_work: string;

  @Column('text')
  build_notes: string;

  @Column('text')
  engineering_work_order: string;

  @Column('text')
  overall_build_status: string;

  @Column('text')
  construction_job_ecd: string;

  @Column('text')
  construction_job_acd: string;

  @Column('text')
  construction_job_status: string;

  @Column('text')
  construction_job_roe_needed: string;

  @Column('text')
  construction_job_roe_stage: string;

  @Column('text')
  construction_job_roe_status: string;

  @Column('text')
  cnr_reason: string;

  @Column('text')
  provider_summary_status: string;

  @Column('text')
  mrc: string;

  @Column('text')
  nrc: string;

  @Column('text')
  site_visit_ecd: string;

  @Column('text')
  site_visit_acd: string;

  @Column('text')
  customer_premise_ready_ecd: string;

  @Column('text')
  customer_premise_ready_acd: string;

  @Column('text')
  infrastructure_complete_ecd: string;

  @Column('text')
  infrastructure_complete_acd: string;

  @Column('text')
  asr_complete_ecd: string;

  @Column('text')
  order_received_acd: string;

  @Column('text')
  asr_complete_acd: string;

  @Column('text')
  application_date_acd: string;

  @Column('text')
  design_verification_assignment_acd: string;

  @Column('text')
  dlr_distribution_acd: string;

  @Column('text')
  foc_issued_acd: string;

  @Column('text')
  foc_issued_ecd: string;

  @Column('text')
  wired_office_test_acd: string;

  @Column('text')
  wired_office_test_ecd: string;

  @Column('text')
  fiber_ready_date_acd: string;

  @Column('text')
  service_term: string;

  @Column('text')
  notes: string;

  @Column('text')
  cancel_date: string;

  @Column('text')
  domain: string;

  @Column('text')
  acp_path_segment: string;

  @Column('text')
  offnet_vendor_name: string;

  @Column('text')
  all_headers: string;
}
