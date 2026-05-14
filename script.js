fetch('data/content.json')
  .then(res => res.json())
  .then(data => {
    const updatesDiv = document.getElementById('updates-list');
    updatesDiv.innerHTML = '';
    data.updates.forEach(update => {
      const card = document.createElement('div');
      card.className = 'update-card';
      card.innerHTML = `<strong>${update.date}</strong>: ${update.text}`;
      updatesDiv.appendChild(card);
    });

    const offersDiv = document.getElementById('offers-list');
    offersDiv.innerHTML = '';
    data.offers.forEach(offer => {
      const card = document.createElement('div');
      card.className = 'offer-card';
      card.innerHTML = `<strong>${offer.title}</strong><p>${offer.detail}</p>`;
      offersDiv.appendChild(card);
    });

    const noticesDiv = document.getElementById('notices-list');
    noticesDiv.innerHTML = '';
    data.notices.forEach(notice => {
      const card = document.createElement('div');
      card.className = 'notice-card';
      card.innerHTML = `<strong>${notice.date}</strong>: ${notice.content}`;
      noticesDiv.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById('updates-list').innerHTML = 'No updates available.';
    document.getElementById('offers-list').innerHTML = 'No offers right now.';
    document.getElementById('notices-list').innerHTML = 'No notices.';
  });
