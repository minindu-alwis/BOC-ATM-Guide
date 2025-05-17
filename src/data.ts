import { StepsData } from './types';

export const steps: StepsData = {
  card: [
    {
      id: 1,
      title: {
        english: "Insert ATM Card",
        sinhala: "ATM කාඩ්පත ඇතුළු කරන්න",
        tamil: "ATM அட்டையை செருகவும்"
      },
      description: {
        english: "Insert your BOC ATM card into the card reader slot with the chip facing up.",
        sinhala: "චිප් එක ඉහළට මුහුණලා ඔබේ BOC ATM කාඩ්පත කාඩ් කියවනය තුළට ඇතුළු කරන්න.",
        tamil: "உங்கள் BOC ATM அட்டையை சிப் மேல்நோக்கி இருக்குமாறு அட்டை வாசிப்பான் துவாரத்தில் செருகவும்."
      },
      image: "insert-card"
    },
    {
      id: 2,
      title: {
        english: "Select Language",
        sinhala: "භාෂාව තෝරන්න",
        tamil: "மொழியைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Choose your preferred language from the options: Sinhala, Tamil, or English.",
        sinhala: "සිංහල, දෙමළ හෝ ඉංග්‍රීසි යන විකල්ප වලින් ඔබේ කැමති භාෂාව තෝරන්න.",
        tamil: "சிங்களம், தமிழ் அல்லது ஆங்கிலம் ஆகிய விருப்பங்களிலிருந்து உங்களுக்கு விருப்பமான மொழியைத் தேர்வுசெய்யவும்."
      },
      image: "select-language"
    },
    {
      id: 3,
      title: {
        english: "Choose Receipt Option",
        sinhala: "රිසිට්පත් විකල්පය තෝරන්න",
        tamil: "ரசீது விருப்பத்தைத் தேர்வுசெய்யவும்"
      },
      description: {
        english: "Select whether you would like to receive a receipt (Yes / No).",
        sinhala: "ඔබට රිසිට්පතක් ලබා ගැනීමට අවශ්‍යද (ඔව් / නැත) තෝරන්න.",
        tamil: "நீங்கள் ரசீதைப் பெற விரும்புகிறீர்களா (ஆம் / இல்லை) என்பதைத் தேர்ந்தெடுக்கவும்."
      },
      image: "receipt-option"
    },
    {
      id: 4,
      title: {
        english: "Enter PIN Number",
        sinhala: "PIN අංකය ඇතුළත් කරන්න",
        tamil: "PIN எண்ணை உள்ளிடவும்"
      },
      description: {
        english: "Enter your 4-digit PIN number using the keypad. Make sure to cover the keypad for security.",
        sinhala: "යතුරු පුවරුව භාවිතයෙන් ඔබේ අංක 4 PIN අංකය ඇතුළත් කරන්න. ආරක්ෂාව සඳහා යතුරු පුවරුව ආවරණය කිරීමට වග බලා ගන්න.",
        tamil: "விசைப்பலகையைப் பயன்படுத்தி உங்கள் 4 இலக்க PIN எண்ணை உள்ளிடவும். பாதுகாப்புக்காக விசைப்பலகையை மறைக்க உறுதிசெய்யவும்."
      },
      image: "enter-pin"
    },
    {
      id: 5,
      title: {
        english: "Select Cash Withdraw Option",
        sinhala: "මුදල් ආපසු ගැනීමේ විකල්පය තෝරන්න",
        tamil: "பணம் எடுக்கும் விருப்பத்தைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Select the 'Cash Withdrawal' option from the main menu.",
        sinhala: "ප්‍රධාන මෙනුවෙන් 'මුදල් ආපසු ගැනීම' විකල්පය තෝරන්න.",
        tamil: "முதன்மை மெனுவிலிருந்து 'பணம் எடுப்பு' விருப்பத்தைத் தேர்ந்தெடுக்கவும்."
      },
      image: "cash-withdraw"
    },
    {
      id: 6,
      title: {
        english: "Choose Account Type",
        sinhala: "ගිණුම් වර්ගය තෝරන්න",
        tamil: "கணக்கு வகையைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Select the type of account you want to withdraw from (Savings, Current, etc.).",
        sinhala: "ඔබට මුදල් ආපසු ගැනීමට අවශ්‍ය ගිණුමේ වර්ගය තෝරන්න (ඉතිරිකිරීම්, ජංගම, ආදිය).",
        tamil: "நீங்கள் பணம் எடுக்க விரும்பும் கணக்கு வகையைத் தேர்ந்தெடுக்கவும் (சேமிப்பு, நடப்பு போன்றவை)."
      },
      image: "account-type"
    },
    {
      id: 7,
      title: {
        english: "Enter Amount",
        sinhala: "මුදල ඇතුළත් කරන්න",
        tamil: "தொகையை உள்ளிடவும்"
      },
      description: {
        english: "Enter the amount you wish to withdraw using the keypad.",
        sinhala: "යතුරු පුවරුව භාවිතයෙන් ඔබට ආපසු ගැනීමට අවශ්‍ය මුදල ඇතුළත් කරන්න.",
        tamil: "விசைப்பலகையைப் பயன்படுத்தி நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும்."
      },
      image: "enter-amount"
    },
    {
      id: 8,
      title: {
        english: "Get Money",
        sinhala: "මුදල් ලබා ගන්න",
        tamil: "பணத்தைப் பெறுங்கள்"
      },
      description: {
        english: "Collect your cash from the dispenser slot.",
        sinhala: "බෙදාහරින ස්ථානයෙන් ඔබේ මුදල් එකතු කරගන්න.",
        tamil: "விநியோகிப்பான் துவாரத்திலிருந்து உங்கள் பணத்தைச் சேகரிக்கவும்."
      },
      image: "get-money"
    },
    {
      id: 9,
      title: {
        english: "Withdrawal Successful",
        sinhala: "ආපසු ගැනීම සාර්ථකයි",
        tamil: "பணம் எடுப்பு வெற்றிகரமானது"
      },
      description: {
        english: "Your withdrawal is successful. Don't forget to take your card.",
        sinhala: "ඔබේ ආපසු ගැනීම සාර්ථකයි. ඔබේ කාඩ්පත ගැනීමට අමතක නොකරන්න.",
        tamil: "உங்கள் பணம் எடுப்பு வெற்றிகரமானது. உங்கள் அட்டையை எடுக்க மறக்காதீர்கள்."
      },
      image: "success-card"
    }
  ],
  cardless: [
    {
      id: 1,
      title: {
        english: "Select Language",
        sinhala: "භාෂාව තෝරන්න",
        tamil: "மொழியைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Choose your preferred language from the options: Sinhala, Tamil, or English.",
        sinhala: "සිංහල, දෙමළ හෝ ඉංග්‍රීසි යන විකල්ප වලින් ඔබේ කැමති භාෂාව තෝරන්න.",
        tamil: "சிங்களம், தமிழ் அல்லது ஆங்கிலம் ஆகிய விருப்பங்களிலிருந்து உங்களுக்கு விருப்பமான மொழியைத் தேர்வுசெய்யவும்."
      },
      image: "select-language"
    },
    {
      id: 2,
      title: {
        english: "Choose Receipt Option",
        sinhala: "රිසිට්පත් විකල්පය තෝරන්න",
        tamil: "ரசீது விருப்பத்தைத் தேர்வுசெய்யவும்"
      },
      description: {
        english: "Select whether you would like to receive a receipt (Yes / No).",
        sinhala: "ඔබට රිසිට්පතක් ලබා ගැනීමට අවශ්‍යද (ඔව් / නැත) තෝරන්න.",
        tamil: "நீங்கள் ரசீதைப் பெற விரும்புகிறீர்களா (ஆம் / இல்லை) என்பதைத் தேர்ந்தெடுக்கவும்."
      },
      image: "receipt-option"
    },
    {
      id: 3,
      title: {
        english: "Select Withdraw by Account",
        sinhala: "ගිණුම මගින් ආපසු ගැනීම තෝරන්න",
        tamil: "கணக்கு மூலம் பணம் எடுப்பதைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Choose the 'Withdraw Money by Account' option from the menu.",
        sinhala: "මෙනුවෙන් 'ගිණුම මගින් මුදල් ආපසු ගැනීම' විකල්පය තෝරන්න.",
        tamil: "மெனுவிலிருந்து 'கணக்கு மூலம் பணம் எடுப்பு' விருப்பத்தைத் தேர்ந்தெடுக்கவும்."
      },
      image: "withdraw-by-account"
    },
    {
      id: 4,
      title: {
        english: "Enter Account Number Twice",
        sinhala: "ගිණුම් අංකය දෙවරක් ඇතුළත් කරන්න",
        tamil: "கணக்கு எண்ணை இரண்டு முறை உள்ளிடவும்"
      },
      description: {
        english: "Enter your account number twice for verification purposes.",
        sinhala: "තහවුරු කිරීමේ අරමුණු සඳහා ඔබේ ගිණුම් අංකය දෙවරක් ඇතුළත් කරන්න.",
        tamil: "சரிபார்ப்பு நோக்கங்களுக்காக உங்கள் கணக்கு எண்ணை இரண்டு முறை உள்ளிடவும்."
      },
      image: "enter-account"
    },
    {
      id: 5,
      title: {
        english: "Enter Amount",
        sinhala: "මුදල ඇතුළත් කරන්න",
        tamil: "தொகையை உள்ளிடவும்"
      },
      description: {
        english: "Enter the amount you wish to withdraw using the keypad.",
        sinhala: "යතුරු පුවරුව භාවිතයෙන් ඔබට ආපසු ගැනීමට අවශ්‍ය මුදල ඇතුළත් කරන්න.",
        tamil: "விசைப்பலகையைப் பயன்படுத்தி நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும்."
      },
      image: "enter-amount"
    },
    {
      id: 6,
      title: {
        english: "Enter Secure Code / OTP Twice",
        sinhala: "ආරක්ෂිත කේතය / OTP දෙවරක් ඇතුළත් කරන්න",
        tamil: "பாதுகாப்பு குறியீடு / OTP ஐ இரண்டு முறை உள்ளிடவும்"
      },
      description: {
        english: "Enter the secure code or OTP sent to your registered mobile number twice.",
        sinhala: "ඔබේ ලියාපදිංචි ජංගම දුරකථන අංකයට යවන ලද ආරක්ෂිත කේතය හෝ OTP දෙවරක් ඇතුළත් කරන්න.",
        tamil: "உங்கள் பதிவுசெய்யப்பட்ட மொபைல் எண்ணுக்கு அனுப்பப்பட்ட பாதுகாப்பு குறியீடு அல்லது OTP ஐ இரண்டு முறை உள்ளிடவும்."
      },
      image: "enter-otp"
    },
    {
      id: 7,
      title: {
        english: "Get Money",
        sinhala: "මුදල් ලබා ගන්න",
        tamil: "பணத்தைப் பெறுங்கள்"
      },
      description: {
        english: "Collect your cash from the dispenser slot.",
        sinhala: "බෙදාහරින ස්ථානයෙන් ඔබේ මුදල් එකතු කරගන්න.",
        tamil: "விநியோகிப்பான் துவாரத்திலிருந்து உங்கள் பணத்தைச் சேகரிக்கவும்."
      },
      image: "get-money"
    },
    {
      id: 8,
      title: {
        english: "Withdrawal Successful",
        sinhala: "ආපසු ගැනීම සාර්ථකයි",
        tamil: "பணம் எடுப்பு வெற்றிகரமானது"
      },
      description: {
        english: "Your withdrawal is successful.",
        sinhala: "ඔබේ ආපසු ගැනීම සාර්ථකයි.",
        tamil: "உங்கள் பணம் எடுப்பு வெற்றிகரமானது."
      },
      image: "success-cardless"
    }
  ]
};