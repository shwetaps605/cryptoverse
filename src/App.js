import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'

import { NavBar, Homepage, Exchanges, News, Cryptocurrencies, CryptoDetails} from './components'
import './App.css'

const App = () => {

    return(
        <div className='app'>
            <div className='navbar'>
                <NavBar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='router'>
                        <Switch>
                            <Route exactly path='/'>
                                <Homepage/>
                            </Route>
                            <Route exactly path='/exchanges'>
                                <Exchanges/>
                            </Route>
                            <Route exactly path='/cryptocurrencies'>
                                <Cryptocurrencies/>
                            </Route>
                            <Route exactly path='/crypto/:coinId'>
                                <CryptoDetails/>
                            </Route>
                            <Route exactly path='/news'>
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                
            </div>
            <div className='footer'>
                
            </div>
        </div>
    )
    
}

export default App