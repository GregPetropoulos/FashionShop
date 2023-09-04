import CheckoutSteps from '../../src/components/CheckoutSteps';
export default {
  title: 'Components/CheckoutSteps',
  component: CheckoutSteps,
  tags: ['autodocs'],
  argTypes: {
    step1: {
      description: 'Reroutes to login page if clicked',
    },
    step2: {
      description: 'Reroutes to the shipping page if clicked',
    },
    step3: {
      description: 'Reroutes to the payment page if clicked',
    },
    step4: {
      description: 'Reroutes to the placeorder page if clicked',
    },
  },
};

export const Default = (args) => <CheckoutSteps {...args} />;
