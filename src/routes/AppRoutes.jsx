import { Routes, Route } from 'react-router-dom'
import { PublicLayout } from '../layouts/PublicLayout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const AppRoutes = ()=> {
  return (
    <Routes>
        {/* Rotas públicas */}
            <Route path='/' element={<PublicLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/login' element={<Login />} />
        


      {/* Rotas admin */}
      {/* <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route> */}
    </Routes>
  )
}
