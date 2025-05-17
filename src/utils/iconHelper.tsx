import React from 'react';
import { 
  CreditCard, 
  Languages, 
  Receipt, 
  KeyRound, 
  DollarSign, 
  Wallet, 
  PiggyBank, 
  Banknote, 
  CheckCircle2,
  QrCode,
  Smartphone,
  UserCircle2
} from 'lucide-react';

export const getStepIcon = (iconName: string, size: number = 64) => {
  const iconMap: Record<string, React.ReactNode> = {
    'insert-card': <CreditCard size={size} />,
    'select-language': <Languages size={size} />,
    'receipt-option': <Receipt size={size} />,
    'enter-pin': <KeyRound size={size} />,
    'cash-withdraw': <DollarSign size={size} />,
    'account-type': <PiggyBank size={size} />,
    'enter-amount': <Banknote size={size} />,
    'get-money': <Wallet size={size} />,
    'success-card': <CheckCircle2 size={size} />,
    'success-cardless': <CheckCircle2 size={size} />,
    'withdraw-by-account': <UserCircle2 size={size} />,
    'enter-account': <QrCode size={size} />,
    'enter-otp': <Smartphone size={size} />
  };

  return iconMap[iconName] || <DollarSign size={size} />;
};