import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader'
import AppContent from './components/layout/AppContent'
import AppSider from './components/layout/AppSider'

export default function App() {
  return (
    <Layout>
        <AppHeader />
      <Layout>
        <AppSider />
       <AppContent />
      </Layout>  
    </Layout>
  )
}
 