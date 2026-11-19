import { describe, expect, it } from 'vitest';
import { validateEnquiry, solutions } from '@/data/site';
const valid = {name:'Ada Okafor',email:'ada@example.com',challenge:'Integrate our finance workflows.',category:'Automation',consent:true};
describe('Business enquiry rules', () => {
 it('requires a full name', () => expect(validateEnquiry({...valid,name:''})['name']).toBeDefined());
 it('rejects invalid email addresses', () => expect(validateEnquiry({...valid,email:'not-an-email'})['email']).toBeDefined());
 it('requires a business challenge', () => expect(validateEnquiry({...valid,challenge:' '})['challenge']).toBeDefined());
 it('rejects unknown enquiry categories', () => expect(validateEnquiry({...valid,category:'Unknown'})['category']).toBeDefined());
 it('accepts Partnership enquiries', () => expect(validateEnquiry({...valid,category:'Partnership'})).toEqual({}));
 it('rejects honeypot submissions', () => expect(validateEnquiry({...valid,website:'spam'})['form']).toBeDefined());
 it('accepts a complete valid enquiry', () => expect(validateEnquiry(valid)).toEqual({}));
 it('preserves all twelve required solution categories', () => expect(solutions.map(s=>s.title)).toEqual(['Business & Digital Strategy','Technology Integration & Digital Transformation','Custom Software & Digital Product Development','AI, Data & Business Intelligence','Cloud Solutions','Cybersecurity & Digital Risk','Automation & Intelligent Workflows','IoT & Connected Business Solutions','User Experience & Digital Experience Design','Mobile Application Development','Change Management & Digital Adoption','Training, Digital Capability & Managed Support']));
});
