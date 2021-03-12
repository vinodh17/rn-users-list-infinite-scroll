import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore  from 'redux-mock-store';
import UsersScreen from '../Screens/users';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn()
	}
})


describe('Users Screen', () => {
	describe('Rendering', () => {
		

		const props = createTestProps();
		const wrapper = shallow(
			<Provider store={store}>
				<UsersScreen {...props} />
			</Provider>
		)

		it('should render a view', () => {
			expect(wrapper.find('.users-wrapper')).toHaveLength(0);
		})

	})
	
})