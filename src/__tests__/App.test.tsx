import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import ControlButton from '../components/ControlButton';
import MainBoard from '../components/MainBoard';
import WrapperContent from '../components/WrapperContent';
import MessagesProvider from '../providers/MessagesProvider';
import userEvent from '@testing-library/user-event';

describe('Board component', () => {
  it('Should load with three columns', async () => {
    render(<MainBoard />)

    expect(screen.getAllByRole('column')).toHaveLength(3);
  })
  
  it('Should have titles to match Error Type 1, Warning Type 2, Info Type 3', async () => {
    render(<MainBoard />)

    const columnsTitle = screen.getAllByRole('heading');
    
    expect(columnsTitle[0].textContent).toMatch(/error Type 1/i)
    expect(columnsTitle[1].textContent).toMatch(/Warning Type 2/i)
    expect(columnsTitle[2].textContent).toMatch(/Info Type 3/i)
  })
}) 

describe('Action Buttons component', () => {
  it('Should have two action buttons on screen', async () => {
    render(<ControlButton />)

    const clearButton = screen.queryByRole('button', {name: /Clear/i});
    const stopButton = screen.queryByRole('button', {name: /Stop/i});
    const startButton = screen.queryByRole('button', {name: /Start/i});

    expect(clearButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
    expect(startButton).not.toBeInTheDocument();
  })

  it('should clear all messages when Clear button is clicked', async () => {
    render(<MessagesProvider><App /></MessagesProvider>);
    expect(screen.getAllByRole('alert').length).toBe(1);
    userEvent.click(screen.getByRole('button', {name: /clear all/i}))
    expect(screen.queryAllByRole('alert').length).toBe(0);
  });

  it('should stop messages when Stop button is clicked', async () => {
    render(<MessagesProvider><App /></MessagesProvider>);

    expect(screen.getAllByRole('alert').length).toBe(1);
    expect(screen.getByRole('button', {name: /Stop Messages/i})).toBeEnabled()
    userEvent.click(screen.getByRole('button', {name: /Stop Messages/i}))
    expect(screen.getByRole('button', {name: /Start Messages/i})).toBeInTheDocument()
    expect(screen.getAllByRole('alert').length).toBe(1);
    userEvent.click(screen.getByRole('button', {name: /Start Messages/i}))
    expect(screen.getByRole('button', {name: /Stop Messages/i})).toBeInTheDocument()
    expect(screen.getAllByRole('alert').length).toBe(2)
  });
});

describe('Wrapper Content Component', () => {
  it('Should have title', async () => {
    render(<WrapperContent>testing ...</WrapperContent>)

    const textTitle = await screen.findByText('nuffsaid.com Coding Challenge');

    expect(textTitle).toBeInTheDocument();
  })
}) 