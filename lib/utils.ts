import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export const isMobileDevice = () => {
    if (typeof process === 'undefined') {
        throw new Error('[Server method] you are importing a server-only module outside of server');
    }

    const { get } = headers();
    const ua = get('user-agent');

    const device = new UAParser(ua || '').getDevice();

    const isMobile = device.type === 'mobile';

    return isMobile;
};

export const validateString = (
    value: unknown,
    maxLength: number
  ): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;
    }
  
    return true;
  };
  
  export const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something went wrong";
    }
  
    return message;
  };