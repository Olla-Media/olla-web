export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'read-receipts',
    question: 'How can I tell if someone has read my message?',
    answer:
      'Blue double-check marks appear beside a sent message once it has been opened. You can turn read receipts off in Settings → Privacy.',
  },
  {
    id: 'connect',
    question: "Why can't I connect to Olla?",
    answer:
      'Check that you have a working data or Wi-Fi connection, that Olla is allowed to use mobile data, and that you are on a supported Android version. Then try closing and reopening the app.',
  },
  {
    id: 'media',
    question: 'How can I fix problems with downloading or sending media files on Olla?',
    answer:
      'Confirm you have enough storage, a stable connection, and that auto-download is enabled for your current network. Retry the transfer, or send a smaller file.',
  },
  {
    id: 'delayed',
    question: 'Why are my incoming messages delayed?',
    answer:
      'Delays usually mean the device is in battery optimization or Doze. Exclude Olla from battery restrictions and keep background data enabled.',
  },
  {
    id: 'reinstall',
    question: 'How do I reinstall Olla?',
    answer:
      'Uninstall Olla from Settings → Apps, then install the latest build from Google Play. Your chats restore from the cloud if you previously enabled backup.',
  },
  {
    id: 'roaming',
    question: 'When I travel abroad, will I be charged for data roaming?',
    answer:
      'Olla uses your mobile data. If roaming is on, your carrier may charge. Use Wi-Fi or a local SIM to avoid roaming fees.',
  },
  {
    id: 'sd-card',
    question: 'How do I move Olla to the SD card?',
    answer:
      'Open Settings → Apps → Olla → Storage. If your device allows it, choose Change and select the SD card. Media can also be stored on the card from Olla Settings.',
  },
  {
    id: 'block',
    question: 'How do I block or unblock a contact?',
    answer:
      'Open the chat, tap the contact name, then Block. Unblock from Settings → Privacy → Blocked contacts.',
  },
  {
    id: 'add-contacts',
    question: 'How do I add contacts to Olla?',
    answer:
      'Olla uses your phone’s address book. Save a number with a country code, grant contacts permission, and pull to refresh the contact list.',
  },
  {
    id: 'delete-account',
    question: 'How do I delete my account?',
    answer:
      'Go to Settings → Account → Delete my account. This removes your profile, chats, and Moments from Olla servers and cannot be undone.',
  },
  {
    id: 'android',
    question: 'Which Android devices are supported?',
    answer:
      'Olla supports Android 6.0 and newer on phones with Google Play Services. Tablets and rooted devices may work but are not officially supported.',
  },
  {
    id: 'tones',
    question: 'How do I turn off conversation tones (when I send and receive a message)?',
    answer:
      'Open Settings → Notifications and turn off Conversation tones. You can still keep vibration or pop-up alerts.',
  },
  {
    id: 'menu',
    question: 'Where is the Menu button?',
    answer:
      'The menu is the three-dot icon in the top-right of most screens. On some devices it also appears as the hardware or on-screen Menu key.',
  },
  {
    id: 'send',
    question: 'How do I send messages, documents, media, contacts or a location?',
    answer:
      'Open a chat and tap the + button next to the composer. Choose photo, video, document, contact, or location, then send.',
  },
  {
    id: 'delete-contact',
    question: 'How do I delete a contact?',
    answer:
      'Contacts live in your phone book. Remove the person from the device contacts app, then refresh Olla. You can also clear the chat history from the chat menu.',
  },
  {
    id: 'privacy',
    question: 'How do I configure my privacy settings?',
    answer:
      'Go to Settings → Privacy to control last seen, profile photo, read receipts, blocked contacts, and who can add you to groups.',
  },
  {
    id: 'auto-download',
    question: 'How do I configure auto-download?',
    answer:
      'Open Settings → Data and storage → Auto-download. Choose whether photos, audio, and video download over Wi-Fi, mobile data, or never.',
  },
]
