import { RuleEntity } from '../rule/entity/rule.entity';
import { FeatureFlagContext } from '../rule/types';

export function evaluateFeatureFlag(
  context: FeatureFlagContext,
  rules: RuleEntity[]
) {
  const evaluatedFlagResp = {};
  // set all keys to false by default
  Object.keys(context).forEach((key) => {
    evaluatedFlagResp[key] = false;
  });

  for (const rule of rules) {
    const { operator, value, attribute } = rule;
    const formattedAttributeName = attribute.name.toLowerCase().trim();
    if (context[formattedAttributeName]) {
      if (operator.name === 'in') {
        const transformedValues = value.split(',') as string[];
        const hasValue = transformedValues.some((value) => {
          return value === context[formattedAttributeName];
        });

        evaluatedFlagResp[formattedAttributeName] = hasValue;
      }
    }
  }

  return evaluatedFlagResp;
}
