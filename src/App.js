import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; // компонент сплывающей подсказки

import { NavBar, Footer, Sidebar, ThemeSettings } from './components';
import { 
    Ecommerce, 
    Orders, 
    Calendar, 
    Employees, 
    Stacked, 
    Pyramid, 
    Customers, 
    Kanban, 
    Area, 
    Bar, 
    Pie, 
    Financial,
    ColorPicker,
    ColorMapping, 
    Editor,
    Line
} from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
    const { activeMenu } = useStateContext();

    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div 
                        className='fixed right-4 bottom-4'
                        style={{ zIndex: '1000' }}
                    >
                        <TooltipComponent content='Settings' position='Top'>
                            <button 
                                type='button' 
                                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ background: 'blue', borderRadius: '50%'}}
                                >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    { activeMenu 
                        ?
                            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                                <Sidebar />
                            </div>
                        :
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                    }
                    <div className={ `dark:bg-main-bg bg-main-bg min-h-screen w-full 
                        ${ activeMenu ? 'md:ml-72' : 'flex-2' }`}
                    >
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <NavBar />
                        </div>
                    
                        <div>
                            <Routes>
                                {/* Dashboard - Приборная панель */}
                                <Route path='/' element={ <Ecommerce /> } />
                                <Route path='/ecommerce' element={ <Ecommerce /> } />

                                {/* Pages - Страницы */}
                                <Route path='/orders' element={ <Orders /> } /> {/* Заказы */}
                                <Route path='/employees' element={ <Employees /> } /> {/* Сотрудники */}
                                <Route path='/customers' element={ <Customers /> } /> {/* Клиенты */}

                                {/* Apps - Приложения */}
                                <Route path='/kanban' element={ <Kanban /> } /> {/* Доска канбана */}
                                <Route path='/editor' element={ <Editor /> } /> {/* Редактор */}
                                <Route path='/calendar' element={ <Calendar /> } /> {/* Календарь */}
                                <Route path='/color-picker' element={ <ColorPicker /> } /> {/* Выбор цвета */}

                                {/* Charts - Диаграммы */}
                                <Route path='/line' element={ <Line /> } /> {/* Линия */}
                                <Route path='/area' element={ <Area /> } /> {/* Область */}
                                <Route path='/bar' element={ <Bar /> } /> {/* Столбы */}
                                <Route path='/pie' element={ <Pie /> } /> {/* Круг */}
                                <Route path='/financial' element={ <Financial /> } /> {/* Финансы */}
                                <Route path='/color-mapping' element={ <ColorMapping /> } /> {/* Цветовое отображение */}
                                <Route path='/pyramid' element={ <Pyramid /> } /> {/* Пирамида */}
                                <Route path='/stacked' element={ <Stacked /> } /> {/* Сложенные диаграммы */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;