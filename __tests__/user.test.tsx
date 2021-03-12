import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { User } from '../Screens/user';

const createMockStore = configureMockStore();
const store = createMockStore({});

const createTestProps = () => {
	navigation: {
		navigate: jest.fn()
	}
}

describe('User Screen', () => {
	describe('Rendering', () => {
		
		const props = createTestProps();
		const wrapper = shallow(
			<Provider store={store}>
				<User {...props}/>
			</Provider>
		)

		it('Should render view', () => {
			expect(wrapper.find('.user-wrapper')).toHaveLength(0)
		})

	})
	
})