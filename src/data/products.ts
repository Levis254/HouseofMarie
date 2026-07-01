import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'rosemarie-no1',
    name: 'RoseMarie No. 1',
    subtitle: 'L\'Obscurité Dorée',
    story: 'Designed for unforgettable evenings. A captivating dialogue between bright Mediterranean citrus and deeply seductive nocturnal woods, capturing the essence of mysterious nights.',
    description: 'RoseMarie No. 1 is the signature formulation of the House. It represents the duality of brightness and depth, blending delicate floral petals with heavy amber elements for a scent trail that lingers beautifully. Every spray is a step into a dimly lit avenue of gold reflections.',
    notes: {
      top: ['Bergamot', 'Lemon Zest', 'Cardamom'],
      heart: ['Jasmine Sambac', 'Orange Blossom', 'Warm Saffron'],
      base: ['Amberwood', 'Warm Cedarwood', 'Patchouli', 'Oakmoss']
    },
    price: 185,
    image: '/images/marie_no1.png',
    isAvailable: true,
    size: '100 ml',
    olfactoryFamily: 'Floral Woody'
  },
  {
    id: 'rosemarie-no2',
    name: 'RoseMarie No. 2',
    subtitle: 'L\'Aube Marine',
    story: 'Capturing the serenity of coastal mornings. A refreshing breath of morning breeze along the cliffs of the French Riviera, where citrus trees meet the salt of the sea.',
    description: 'An ethereal and crisp blend that brings a sense of purity and calm. Crafted with premium Italian neroli and natural marine elements to capture the timeless nature of seashore light. Refined, fresh, and everlasting.',
    notes: {
      top: ['Neroli', 'Coastal Sage', 'Grapefruit'],
      heart: ['Sea Salt Accord', 'White Jasmine', 'Seaweed Extract'],
      base: ['White Musk', 'Ambrette Seeds', 'Driftwood', 'Dry Amber']
    },
    price: 175,
    image: '/images/marie_no2.png',
    isAvailable: true,
    size: '100 ml',
    olfactoryFamily: 'Fresh Aquatic'
  },
  {
    id: 'rosemarie-no3',
    name: 'RoseMarie No. 3',
    subtitle: 'Le Rêve Royal',
    story: 'A timeless tribute to royal elegance. A rich, warm, and sophisticated composition combining velvety rose blossoms with the raw, precious depth of sandalwood and oudh.',
    description: 'Our most opulent fragrance. RoseMarie No. 3 is created for those who demand ultimate presence and luxury. The natural Damascus rose oil combines with pure Cambodian oudh and warm incense for a majestic, regal presence.',
    notes: {
      top: ['Turkish Rose Petals', 'Pink Pepper', 'Cinnamon Bark'],
      heart: ['Mysore Sandalwood', 'Sweet Amber', 'Leather Accord'],
      base: ['Cambodian Oudh', 'Vanilla Absolute', 'Incense', 'Vetiver']
    },
    price: 195,
    image: '/images/marie_no3.png',
    isAvailable: true,
    size: '100 ml',
    olfactoryFamily: 'Rich Oriental'
  }
];
