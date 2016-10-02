import {Injectable} from '@angular/core';

@Injectable()
export class ContactsService {
  private CONTACT_DATA = [
    {
      id: 0,
      name: 'Commander Shepard',
      race: 'Human',
      gender: 'Male',
     voiceActor: 'Mark Meer',
      profession: 'N7 Alliance Marine / Spectre',
      image: '/assets/images/0.jpg',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 1,
      name: 'Jeff "Joker" Moreau',
      race: 'Human',
      gender: 'Male',
     voiceActor: 'Seth Green',
      profession: 'Flight Lieutenant',
      image: '/assets/images/1.jpg',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: -1,
      name: 'David Anderson',
      race: 'Human',
      gender: 'Male',
     voiceActor: 'Keith David',
      profession: 'Alliance Officer',
      image: '/assets/images/2.jpg',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 2,
      name: 'Steven Hackett',
      race: 'Alliance Admiral',
      gender: 'Male',
     voiceActor: 'Lance Henriksen',
      profession: 'Alliance Admiral',
      image: '/assets/images/3.png',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 3,
      name: 'EDI',
      race: 'Artificial Intelligence',
      gender: 'Feminine Programming',
     voiceActor: 'Tricia Helfer',
      profession: 'Enhanced Defense Intelligence',
      image: '/assets/images/4.jpg',
      appereances: {
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 4,
      name: 'Tali Zorah nar Rayya',
      race: 'Quarian',
      gender: 'Female',
     voiceActor: 'Ash Sroka',
      profession: 'Quarian Machinist',
      image: '/assets/images/5.jpg',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 5,
      name: 'Liara T Soni',
      race: 'Asari',
      gender: 'Feminine',
     voiceActor: 'Ali Hillis',
      profession: 'Asari Scientist',
      image: '/assets/images/6.jpg',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 6,
      name: 'Ashley Williams',
      race: 'Human',
      gender: 'Female',
     voiceActor: 'Kimberly Brooks',
      profession: 'Systems Alliance Soldier',
      image: '/assets/images/7.jpg',
      appereances: {
        street: 'Mass Effect 1',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'
      }
    },
    {
      id: 7,
      name: 'Illusive Man',
      race: 'Human',
      gender: 'Male',
     voiceActor: 'Martin Sheen',
      profession: 'Leader of Cerberus',
      image: '/assets/images/8.png',
      appereances: {
        city: 'Mass Effect 2',
        country: 'Mass Effect 3'
      }
    },
    {
      id: 8,
      name: 'Garrus Vakarian',
      race: 'Turian',
      gender: 'Male',
     voiceActor: 'Brandon Keener',
      profession: 'Turian Agent',
      image: '/assets/images/9.png',
      appereances: {
        street: 'Mass Effect ',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'    
      }
    },
    {
      id: 9,
      name: 'Miranda Lawson',
      race: 'Human',
      gender: 'Female',
     voiceActor: 'Yvonne Strahovski',
      profession: 'Cerberus Officer',
      image: '/assets/images/10.jpg',
      appereances: {
        street: 'Mass Effect ',
        zip: 'Mass Effect 2',
        city: 'Mass Effect 3'  
      }
    }
  ];

  getContacts() {
    return this.CONTACT_DATA;
  }

  getContact(id: string) {
    return this.CONTACT_DATA.find(contact => contact.id.toString() === id);
  }
}