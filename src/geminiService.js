function smartFilter(query, products) {
  const lowerQuery = query.toLowerCase();

  const priceMatch = lowerQuery.match(/under\s*₹?\s*([\d,]+)/i) ||
    lowerQuery.match(/below\s*₹?\s*([\d,]+)/i) ||
    lowerQuery.match(/budget\s*of\s*₹?\s*([\d,]+)/i) ||
    lowerQuery.match(/within\s*₹?\s*([\d,]+)/i) ||
    lowerQuery.match(/around\s*₹?\s*([\d,]+)/i);
  const maxPrice = priceMatch ? parseInt(priceMatch[1].replace(/,/g, '')) : null;

  let matchedCategory = null;

  if (/gaming\s+(laptop|notebook)/i.test(lowerQuery) || /gaming\s*laptops/i.test(lowerQuery)) {
    matchedCategory = 'gaming laptop';
  }
  else if (/\b(smartwatch|smart watch|smartwatches)\b/i.test(lowerQuery)) {
    matchedCategory = 'smartwatch';
  }
  else if (/\b(fitness tracker|fitness band|smart band|fitbit|mi band)\b/i.test(lowerQuery)) {
    matchedCategory = 'fitness tracker';
  }
  else if (/\b(headphone|earphone|airpod|earbud|headset|earbuds|headphones)\b/i.test(lowerQuery)) {
    matchedCategory = 'headphones';
  }
  else if (/\b(smartphone|phone|mobile|smartphones|phones)\b/i.test(lowerQuery)) {
    matchedCategory = 'phone';
  }
  else if (/\b(tablet|ipad|tablets|tabs|tab)\b/i.test(lowerQuery)) {
    matchedCategory = 'tablet';
  }
  else if (/\b(laptop|notebook|macbook|laptops)\b/i.test(lowerQuery)) {
    matchedCategory = 'laptop';
  }
  else if (/\b(tv|television|smart tv)\b/i.test(lowerQuery)) {
    matchedCategory = 'tv';
  }
  else if (/\b(smart home|alexa|echo|google home|nest|smart speaker|smart bulb|smart camera)\b/i.test(lowerQuery)) {
    matchedCategory = 'smart home';
  }
  else if (/\b(camera|dslr|gopro|action camera)\b/i.test(lowerQuery)) {
    matchedCategory = 'camera';
  }
  else if (/\b(vacuum|appliance|dyson|cleaner)\b/i.test(lowerQuery)) {
    matchedCategory = 'home appliance';
  }
  else if (/\b(gaming console|playstation|xbox|ps5|gaming mouse|gaming accessory)\b/i.test(lowerQuery)) {
    matchedCategory = 'gaming';
  }

  const brands = ['apple', 'samsung', 'oneplus', 'xiaomi', 'realme', 'sony', 'lg', 'dell', 'hp', 'lenovo', 'boat',
    'vivo', 'motorola', 'nothing', 'asus', 'acer', 'msi', 'amazon', 'google', 'mi', 'canon',
    'gopro', 'fitbit', 'dyson', 'playstation', 'xbox', 'logitech', 'jbl'];
  const matchedBrand = brands.find(brand => {
    const regex = new RegExp(`\\b${brand}\\b`, 'i');
    return regex.test(lowerQuery);
  });

  const bestIntent = /\b(best|top|good|great|recommend)\b/i.test(lowerQuery);
  const budgetIntent = /\b(budget|cheap|affordable|economical|inexpensive)\b/i.test(lowerQuery);

  let filtered = products.filter(product => {
    const productCategory = product.category.toLowerCase();
    const productName = product.name.toLowerCase();

    if (matchedCategory) {
      let categoryMatches = false;

      if (matchedCategory === 'gaming laptop') {
        categoryMatches = productCategory.includes('gaming') && productCategory.includes('laptop');
      } else if (matchedCategory === 'gaming') {
        categoryMatches = productCategory.includes('gaming') || productCategory.includes('console');
      } else {
        categoryMatches = productCategory.includes(matchedCategory);
      }

      if (!categoryMatches) {
        return false;
      }
    }

    if (maxPrice && product.price > maxPrice) {
      return false;
    }

    if (matchedBrand && !productName.includes(matchedBrand)) {
      return false;
    }

    if (!maxPrice && budgetIntent && !matchedCategory) {
      return product.price < 30000;
    }

    if (!maxPrice && !matchedCategory && (lowerQuery.includes('premium') || lowerQuery.includes('flagship'))) {
      return product.price > 50000;
    }

    if (bestIntent && !matchedCategory && !matchedBrand && !maxPrice) {
      return product.price > 40000;
    }

    if (!matchedCategory && (lowerQuery.includes('lifestyle') || lowerQuery.includes('home'))) {
      return productCategory.includes('smart home') ||
        productCategory.includes('home appliance') ||
        productCategory.includes('fitness') ||
        productCategory.includes('tv');
    }

    if (!matchedCategory && (lowerQuery.includes('tech') || lowerQuery.includes('gadget'))) {
      return productCategory.includes('phone') ||
        productCategory.includes('tablet') ||
        productCategory.includes('laptop') ||
        productCategory.includes('smartwatch') ||
        productCategory.includes('camera');
    }

    return true;
  });

  if (bestIntent && filtered.length > 0) {
    filtered.sort((a, b) => b.price - a.price);
  }
  else if (budgetIntent && filtered.length > 0) {
    filtered.sort((a, b) => a.price - b.price);
  }
  else {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

export async function getRecommendations(userQuery, products) {
  return smartFilter(userQuery, products);
}
