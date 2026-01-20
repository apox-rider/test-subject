import { createClient } from "@supabase/supabase-js";
const projectUrl="https://cpykfqewofggqkolyeud.supabase.co"
const projectAPI="sb_publishable_huJDRrq_MqsOx022A4Kjmw_qMxixUZI"

export const supabase=createClient(projectUrl, projectAPI);