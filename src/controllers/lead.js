import Joi from "joi";
import modelLead from "../models/lead";

async function insert(payload = {}) {
  const schema = Joi.object({
    status: Joi.number().min(1).required(),
    company: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().regex(/\S+@\S+\.\S+/).required(),
    opportunities: Joi.array().min(1).required(),
  });

  const validation = await schema.validate(payload);
  console.log(validation);
  if (validation.error) 
    throw new Error("Um ou mais campos inválidos!");
  
  const lead = validation.value;
  const leadExists = modelLead.findLeadByCompany(lead.company);
  if (leadExists) 
    throw new Error(`Lead "${lead.company}" já existe!`);

  return modelLead.insertLead(lead);
}

export default {
  insert,
};
