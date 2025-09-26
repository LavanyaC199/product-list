// const products = [
//   { id: 1, name: 'Aurora Wireless Headphones', price: 2499, category: 'Electronics', rating: 4.5, image: 'https://via.placeholder.com/400x300?text=Headphones' },
//   { id: 2, name: 'Canvas Sneakers', price: 1499, category: 'Apparel', rating: 4.1, image: 'https://via.placeholder.com/400x300?text=Sneakers' },
//   { id: 3, name: 'Ceramic Tea Set', price: 999, category: 'Home', rating: 4.7, image: 'https://via.placeholder.com/400x300?text=Tea+Set' },
//   { id: 4, name: 'Smart LED Lamp', price: 1799, category: 'Electronics', rating: 4.0, image: 'https://via.placeholder.com/400x300?text=Lamp' },
//   { id: 5, name: 'Organic Cotton Shirt', price: 799, category: 'Apparel', rating: 4.3, image: 'https://via.placeholder.com/400x300?text=Shirt' },
//   { id: 6, name: 'Stainless Water Bottle', price: 499, category: 'Home', rating: 4.2, image: 'https://via.placeholder.com/400x300?text=Bottle' },
//   { id: 7, name: 'Bluetooth Speaker', price: 2199, category: 'Electronics', rating: 4.6, image: 'https://via.placeholder.com/400x300?text=Speaker' },
//   { id: 8, name: 'Yoga Mat Pro', price: 1299, category: 'Fitness', rating: 4.4, image: 'https://via.placeholder.com/400x300?text=Yoga+Mat' },
//   { id: 9, name: 'Running Shorts', price: 599, category: 'Apparel', rating: 4.0, image: 'https://via.placeholder.com/400x300?text=Shorts' },
//   { id: 10, name: 'Indoor Plant Kit', price: 699, category: 'Home', rating: 4.8, image: 'https://via.placeholder.com/400x300?text=Plant+Kit' },
//   { id: 11, name: 'Fitness Tracker', price: 3299, category: 'Fitness', rating: 4.1, image: 'https://via.placeholder.com/400x300?text=Tracker' },
//   { id: 12, name: 'Minimalist Wallet', price: 399, category: 'Accessories', rating: 4.2, image: 'https://via.placeholder.com/400x300?text=Wallet' }
// ]

// export default products



const products = [
  { id: 1, name: 'Aurora Wireless Headphones', price: 2499, category: 'Electronics', rating: 4.5, image: 'https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D' },
  { id: 2, name: 'Canvas Sneakers', price: 1499, category: 'Apparel', rating: 4.1, image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Ceramic Tea Set', price: 999, category: 'Home', rating: 4.7, image: 'https://images.unsplash.com/photo-1721373489867-b95a7b3fe16c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyYW1pYyUyMHRlYSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, name: 'Smart LED Lamp', price: 1799, category: 'Electronics', rating: 4.0, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Organic Cotton Shirt', price: 799, category: 'Apparel', rating: 4.3, image: 'https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9yZ2FuaWMlMjBjb3R0b24lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 6, name: 'Stainless Water Bottle', price: 499, category: 'Home', rating: 4.2, image: 'https://plus.unsplash.com/premium_photo-1681284938505-62efa3494bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhaW5sZXNzJTIwc3RlZWwlMjB3YXRlciUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 7, name: 'Bluetooth Speaker', price: 2199, category: 'Electronics', rating: 4.6, image: 'https://media.istockphoto.com/id/1129572489/photo/portable-bluetooth-speaker.webp?a=1&b=1&s=612x612&w=0&k=20&c=-7LF73ehOdwcQDMXXBtnCuUyIGMRoiaeWsBqTtdpFqs=' },
  { id: 8, name: 'Yoga Mat Pro', price: 1299, category: 'Fitness', rating: 4.4, image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 9, name: 'Running Shorts', price: 599, category: 'Apparel', rating: 4.0, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fHww' },
  { id: 10, name: 'Indoor Plant Kit', price: 699, category: 'Home', rating: 4.8, image: 'https://plus.unsplash.com/premium_photo-1680127401354-ccc306081883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yJTIwcGxhbnQlMjBraXR8ZW58MHx8MHx8fDA%3D' },
  { id: 11, name: 'Fitness Tracker', price: 3299, category: 'Fitness', rating: 4.1, image: 'https://images.unsplash.com/photo-1669480380743-f76990b9bc44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpdG5lc3MlMjB0cmFja2VyfGVufDB8fDB8fHww' },
  { id: 12, name: 'Minimalist Wallet', price: 399, category: 'Accessories', rating: 4.2, image: 'https://images.unsplash.com/photo-1624538000860-24716b9050f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FsbGV0fGVufDB8fDB8fHww' },
{ id: 13, name: 'Coffe mug', price: 250, category: 'home', rating: 4.2, image: 'https://plus.unsplash.com/premium_photo-1719017276454-99ae8306c200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVnfGVufDB8fDB8fHww' },
{ id: 14, name: 'Parker Pen', price: 500, category: 'Acessories', rating: 4.2, image:'https://media.istockphoto.com/id/1313162484/photo/automatic-green-ballpoint-pen-for-writing-on-your-desktop-office-desk-business-work.jpg?s=612x612&w=0&k=20&c=M_2RSW1Ec94VOwgjYKyjNdRZEpXVHFVezPAew17m8vE='},
{ id: 15, name: 'Clock', price: 700, category: 'Home', rating: 4.2, image:'https://media.istockphoto.com/id/1264146093/photo/round-wall-clock-between-wooden-kitchen-shelves.webp?a=1&b=1&s=612x612&w=0&k=20&c=TDz-JSaCmH1g7QjCtz_CQAqRJmZCezkIXvdRgceScrQ='},
{ id: 15, name: 'Fan', price: 5500, category: 'Electronics', rating: 3.8, image:'https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFufGVufDB8fDB8fHww'}
]


export default products
