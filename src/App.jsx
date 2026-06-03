import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import Tabs from './components/Tabs/Tabs';
import Accordion from './components/Accordion/Accordion';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [globalCount, setGlobalCount] = useState(0);
  
  // States for interactive testing
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nestedTab, setNestedTab] = useState('one');
  
  // Accordion Items
  const faqItems = [
    {
      title: '🔍 What is this laboratory app for?',
      content: 'This app is a sandbox for testing popular interactive components in React, organized neatly into modular subdirectories with fully custom CSS styles.'
    },
    {
      title: '⚡ Can I test Hot Module Replacement (HMR)?',
      content: 'Yes! Save any edits to components or CSS files, and the Vite server will update the rendering immediately without losing your current state.'
    },
    {
      title: '🛠️ How do I add my own custom logic?',
      content: 'Open the source files under src/components/ and edit the JavaScript logic or add event listeners like onClick, onChange, etc.'
    }
  ];

  // Helper to trigger dummy load delay
  const triggerLoadingDemo = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      alert('Function execution finished successfully!');
    }, 1500);
  };

  // Render content depending on active sidebar section
  const renderMainContent = () => {
    switch (activeSection) {
      case 'hero':
        return (
          <Hero 
            count={globalCount} 
            onIncrement={() => setGlobalCount(globalCount + 1)} 
          />
        );
      case 'buttons':
        return (
          <section className="section-panel">
            <h2>Button Gallery</h2>
            <p className="panel-desc">Test different button variants, sizes, and states.</p>
            
            <div className="demo-group">
              <h3>Variants</h3>
              <div className="flex-row">
                <Button variant="primary" onClick={() => alert('Primary Clicked')}>Primary</Button>
                <Button variant="secondary" onClick={() => alert('Secondary Clicked')}>Secondary</Button>
                <Button variant="success" onClick={() => alert('Success Clicked')}>Success</Button>
                <Button variant="danger" onClick={() => alert('Danger Clicked')}>Danger</Button>
                <Button variant="outline" onClick={() => alert('Outline Clicked')}>Outline</Button>
                <Button variant="ghost" onClick={() => alert('Ghost Clicked')}>Ghost</Button>
              </div>
            </div>

            <div className="demo-group">
              <h3>Sizes</h3>
              <div className="flex-row items-center">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
              </div>
            </div>

            <div className="demo-group">
              <h3>States & Functions</h3>
              <div className="flex-row items-center">
                <Button disabled>Disabled Button</Button>
                <Button 
                  variant="primary" 
                  loading={buttonLoading} 
                  onClick={triggerLoadingDemo}
                >
                  Click to test API function delay
                </Button>
              </div>
            </div>
          </section>
        );
      case 'cards':
        return (
          <section className="section-panel">
            <h2>Card Grid</h2>
            <p className="panel-desc">Responsive cards displaying content with hover scaling and shadow depth.</p>
            
            <div className="card-grid">
              <Card 
                title="Next-Gen Architecture" 
                badge="featured" 
                badgeColor="primary"
                description="Leverage Vite's lightning fast build tooling and modern ES Modules standard to boost performance."
                actions={
                  <>
                    <Button size="sm" onClick={() => alert('Card 1 action')}>Learn More</Button>
                    <Button size="sm" variant="ghost" onClick={() => alert('Card 1 share')}>Share</Button>
                  </>
                }
              />
              <Card 
                title="Modular Components" 
                badge="popular" 
                badgeColor="success"
                description="Easily import and maintain highly reusable code chunks cleanly organized by component subfolders."
                actions={
                  <>
                    <Button size="sm" onClick={() => alert('Card 2 action')}>Explore docs</Button>
                  </>
                }
              />
              <Card 
                title="Theme Configuration" 
                badge="info" 
                badgeColor="warning"
                description="Easily customize global color styling using HSL tailoring variables defined in root styles."
                actions={
                  <>
                    <Button size="sm" variant="outline" onClick={() => alert('Card 3 configure')}>Configure</Button>
                  </>
                }
              />
            </div>
          </section>
        );
      case 'modals':
        return (
          <section className="section-panel">
            <h2>Modals & Dialogs</h2>
            <p className="panel-desc">Popups overlaying background with backdrop-filter blur and press key closures.</p>
            
            <div className="demo-group">
              <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
                Open Modal Overlay
              </Button>
            </div>

            <Modal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              title="Verify Action Request"
              footer={
                <>
                  <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button variant="success" onClick={() => {
                    setIsModalOpen(false);
                    alert('Action submitted!');
                  }}>Confirm & Save</Button>
                </>
              }
            >
              <p>You can use this Modal component to show warning confirmations, forms, details or extra instructions to users.</p>
              <div style={{ marginTop: '1rem', padding: '12px', background: 'var(--code-bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <strong>Current Global Counter:</strong> {globalCount}
              </div>
            </Modal>
          </section>
        );
      case 'tabs':
        return (
          <section className="section-panel">
            <h2>Interactive Tabs</h2>
            <p className="panel-desc">Toggle between nested contents smoothly.</p>
            
            <Tabs 
              tabs={[
                {
                  key: 'one',
                  label: 'General Config',
                  icon: '⚙️',
                  content: (
                    <div className="tab-pane">
                      <h3>General System Config</h3>
                      <p>Modify basic configurations of your application environment here.</p>
                    </div>
                  )
                },
                {
                  key: 'two',
                  label: 'User Preferences',
                  icon: '👤',
                  content: (
                    <div className="tab-pane">
                      <h3>User Profile Settings</h3>
                      <p>View personal statistics, update credentials and edit theme mode selection.</p>
                    </div>
                  )
                },
                {
                  key: 'three',
                  label: 'Export Data',
                  icon: '💾',
                  content: (
                    <div className="tab-pane">
                      <h3>Data Exports</h3>
                      <p>Export testing logs and database snapshots directly into CSV/JSON spreadsheets.</p>
                    </div>
                  )
                }
              ]}
              activeTab={nestedTab}
              onTabChange={(tabKey) => setNestedTab(tabKey)}
            />
          </section>
        );
      case 'accordions':
        return (
          <section className="section-panel">
            <h2>Accordions & Collapse</h2>
            <p className="panel-desc">Collapsible containers that expand with smooth transition effects.</p>
            <Accordion items={faqItems} />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar onSelectTab={(section) => {
        if (section === 'hero') setActiveSection('hero');
        else setActiveSection('buttons');
      }} activeTab={activeSection === 'hero' ? 'hero' : 'components'} />
      
      <div className="app-layout">
        <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
        
        <main className="app-main-content">
          <div className="content-container">
            {renderMainContent()}
          </div>
        </main>
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
