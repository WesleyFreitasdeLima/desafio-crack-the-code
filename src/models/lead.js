import db from "../services/database";

function insertLead({ status, company, phone, email, opportunities = [] }) {
  const leads = db.select("leads");
  console.log(leads)

  let newLeadsList = [];
  if (leads) 
    newLeadsList = [...leads];
    
  newLeadsList.push({ status, company, phone, email, opportunities });

  return db.insert("leads", newLeadsList);
}

function findLeads() {
  const leads = db.select("leads");
  return leads;
}

function findLeadByCompany(company) {
  const leads = db.select("leads");

  let leadByCompany = null;
  if (leads && leads.length > 0) {
    const leadFound = leads.filter((lead) => lead.company === company);
    leadByCompany = leadFound[0];
  }

  return leadByCompany;
}

export default {
  insertLead,
  findLeads,
  findLeadByCompany,
};
