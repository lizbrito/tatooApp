import PropTypes from 'prop-types';
import Button from './Button';
import Tasks from '../Tasks';

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
            <Tasks />
        
        </header>
    )


}

Header.defaultProps = {
    title: 'Ink Master',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;