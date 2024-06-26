/* eslint-disable */

'use server';
import { NewMemberSchema, OtpSchema } from '@/schemas';
import * as z from 'zod';
import { Baseurl } from '@/utils';
import Calls from './axios';

const $Http = Calls(Baseurl);

const CreateUser = async (values: z.infer<typeof NewMemberSchema>) => {
  const validatedfeilds = NewMemberSchema.safeParse(values);

  if (!validatedfeilds.success) {
    return {
      message: 'check your input'
    };
  }
  const { fullName, email, bio, address, whatsappnumber, preferedName } =
    validatedfeilds.data;

  try {
    const userData = {
      fullName,
      email,
      bio,
      address,
      whatsappnumber,
      preferedName
    };
    const res = await $Http.post('/api/v1/members/register', userData);

    return {
      status: res.status,
      account: res.data.data
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

const Otp = async (values: z.infer<typeof OtpSchema>, userId: string) => {
  const otp = values;

  const userdata = { otp, userId };

  try {
    const res = await $Http.post('/api/v1/members/verify-otp', userdata);

    return {
      status: res.status,
      message: res.data.message,
      account: res.data.data
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

const getallmembers = async () => {
  try {
    const res = await $Http.get('/api/v1/members/get-all-users');

    return {
      status: res.status,
      account: res.data.members
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

const getAllProject = async () => {
  try {
    const res = await $Http.get('/api/v1/project');

    return {
      status: res.status,
      projects: res.data.projects
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

export { CreateUser, Otp, getallmembers, getAllProject };
