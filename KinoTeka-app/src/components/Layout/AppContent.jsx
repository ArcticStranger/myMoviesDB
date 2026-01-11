import { Layout, Card, Carousel, Image } from 'antd'

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 90px)',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

export default function AppContent() {
  return (<Layout.Content style={contentStyle}>
      <Carousel autoplay>
    <div>
     <Image
    style={{
      width: '100%',
      height: 'calc(100vh - 90px)',
      objectFit: 'cover',
      opacity: '.8'
    }}
    alt="The King's Speech"
    src="https://wallpaper.forfun.com/fetch/a9/a9fcc297cf08eafb420778daae8da995.jpeg?w=1470&r=0.5625&f=webp"
  />
    </div>
    <div>
     <Image
    style={{
      width: '100%',
      height: 'calc(100vh - 90px)',
      objectFit: 'cover',
      opacity: '.8'
    }}
    alt="The Hateful Eight"
    src="https://wallpaper.forfun.com/fetch/ae/ae550d108b6340c98cee5d518e660bda.jpeg?w=1470&r=0.5625&f=webp"
  />
    </div>
    <div>
          <Image
    style={{
      width: '100%',
      height: 'calc(100vh - 90px)',
      objectFit: 'cover',
      opacity: '.8'
    }}
    alt="The Hateful Eight"
    src="https://wallpaper.forfun.com/fetch/b5/b508619ff7b293bb901892f987bd5f0c.jpeg?w=1470&r=0.5625&f=webp"
  />
    </div>
    <div>
        <Image
    style={{
      width: '100%',
      height: 'calc(100vh - 90px)',
      objectFit: 'cover',
      opacity: '.8'
    }}
    alt="The Hateful Eight"
    src="https://wallpaper.forfun.com/fetch/ef/efc87f4b3149d8342bd5e54e68822512.jpeg?w=1470&r=0.5625&f=webp"
  />
    </div>
  </Carousel>
  </Layout.Content>)
}