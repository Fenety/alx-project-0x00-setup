export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;  // The text to display on the button
  size?: 'small' | 'medium' | 'large'; // Optional size prop
  shape?: 'square' | 'rounded' | 'pill'; // Optional shape prop
}