import test from 'node:test';
import assert from 'node:assert/strict';
import { validateLeadInput, buildAiInsights } from './contact';

test('validates required lead fields', () => {
  const result = validateLeadInput({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+919876543210',
    company: 'Northstar Labs',
    projectType: 'Business Website',
    timeline: '1 month',
    projectDescription: 'A premium marketing site for a modern agency.'
  });

  assert.equal(result.valid, true);
  assert.equal(result.errors.length, 0);
});

test('builds AI-assisted lead insights from the submission', () => {
  const insights = buildAiInsights({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+919876543210',
    company: 'Northstar Labs',
    projectType: 'E-commerce',
    timeline: 'ASAP',
    projectDescription: 'We need a premium storefront with checkout and CRM integrations within a week.'
  });

  assert.equal(insights.category, 'E-commerce');
  assert.equal(insights.priority, 'High');
  assert.match(insights.summary, /Northstar Labs/i);
});
