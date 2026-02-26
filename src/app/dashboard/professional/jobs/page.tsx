import type { Metadata } from "next";
import { Button, Flex, Grid } from "@/components/ui";
import DashboardCard from "@/components/dashboard/DashboardCard";
import avatar1 from "@/assets/web/images/avatarImages/Avatar_Image_2.png";
import Image from "next/image";
import {
  CalenderIcon,
  CheckIcon,
  ClockIcon,
  LocationIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Job Pipeline - InstaFix",
};

// new, schedule, progress, complete
const newJobs = [
  {
    title: "Leaky Faucet Repair",
    price: "2,000",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Today, 4:00 PM",
    location: "124 Maple Ave, Downtown",
  },
  {
    title: "Leaky Faucet Repair",
    price: "2,000",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Today, 4:00 PM",
    location: "124 Maple Ave, Downtown",
  },
  {
    title: "Leaky Faucet Repair",
    price: "2,000",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Today, 4:00 PM",
    location: "124 Maple Ave, Downtown",
  },
];
const scheduleJobs = [
  {
    title: "Leaky Faucet Repair",
    price: "300",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Today, 4:00 PM",
    location: "124 Maple Ave, Downtown",
  },
];
const progressJobs = [
  {
    title: "Leaky Faucet Repair",
    price: "300",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Today, 4:00 PM",
    location: "124 Maple Ave, Downtown",
  },
];
const completeJobs = [
  {
    title: "Leaky Faucet Repair",
    price: "100",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Completed yesterday",
  },
  {
    title: "Leaky Faucet Repair",
    price: "100",
    userImage: avatar1,
    name: "Sarah Jenkins",
    time: "Completed Oct 20",
  },
];

export default function ProfessionalJobsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-colors-primary p-6 border-b border-gray-200 bg-white">
        Calendar & Job Pipeline
      </h1>

      <Grid cols={4} gap="sm" className="p-6">
        <Flex direction="col" justify="start" align="start" className="w-full">
          <Flex
            gap="sm"
            justify="between"
            direction="row"
            align="center"
            className="mb-4 w-full"
          >
            <Flex gap="md" justify="between" direction="row" align="center">
              <span className="w-5 h-5 rounded-full bg-[#3B82F6]"></span>
              <p className="text-lg font-semibold">New Requests</p>
            </Flex>
            <div className="min-w-[23px] h-[20px] flex items-center justify-center text-colors-muted bg-white text-[12px] font-semibold rounded-full px-1">
              3
            </div>
          </Flex>
          {newJobs.map((job, index) => (
            <div key={index} className="mb-4 w-full">
              <DashboardCard>
                <Flex gap="md" direction="col" justify="center" align="start">
                  <Flex
                    direction="row"
                    justify="between"
                    align="start"
                    gap="sm"
                    className="w-full"
                  >
                    <div className="text-base font-semibold">{job.title}</div>
                    <div className="text-base font-semibold">${job.price}</div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Image
                      src={job.userImage}
                      alt={job.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.name}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <CalenderIcon size={15} className="text-[#6B7280]" />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.time}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <LocationIcon size={15} className="text-[#6B7280]" />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.location}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="between"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Button size="sm" variant="outline" className="w-full">
                      Decline
                    </Button>
                    <Button
                      size="sm"
                      variant="none"
                      className="bg-[#2B7CEE] text-white w-full"
                    >
                      Accept
                    </Button>
                  </Flex>
                </Flex>
              </DashboardCard>
            </div>
          ))}
        </Flex>

        <Flex direction="col" justify="start" align="start" className="w-full">
          <Flex
            gap="sm"
            justify="between"
            direction="row"
            align="center"
            className="mb-4 w-full"
          >
            <Flex gap="md" justify="between" direction="row" align="center">
              <span className="w-5 h-5 rounded-full bg-[#F59E0B]"></span>
              <p className="text-lg font-semibold">Scheduled</p>
            </Flex>
            <div className="min-w-[23px] h-[20px] flex items-center justify-center text-colors-muted bg-white text-[12px] font-semibold rounded-full px-1">
              1
            </div>
          </Flex>
          {scheduleJobs.map((job, index) => (
            <div key={index} className="mb-4 w-full">
              <DashboardCard>
                <Flex gap="md" direction="col" justify="center" align="start">
                  <Flex
                    direction="row"
                    justify="between"
                    align="start"
                    gap="sm"
                    className="w-full"
                  >
                    <div className="text-base font-semibold">{job.title}</div>
                    <div className="text-base font-semibold">${job.price}</div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Image
                      src={job.userImage}
                      alt={job.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.name}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <CalenderIcon size={15} className="text-[#6B7280]" />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.time}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <LocationIcon size={15} className="text-[#6B7280]" />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.location}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="between"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Button size="sm" variant="outline" className="w-full">
                      Detail
                    </Button>
                    <Button
                      size="sm"
                      variant="none"
                      className="bg-[#2B7CEE] text-white w-full"
                    >
                      Start Job
                    </Button>
                  </Flex>
                </Flex>
              </DashboardCard>
            </div>
          ))}
        </Flex>

        <Flex direction="col" justify="start" align="start" className="w-full">
          <Flex
            gap="sm"
            justify="between"
            direction="row"
            align="center"
            className="mb-4 w-full"
          >
            <Flex gap="md" justify="between" direction="row" align="center">
              <span className="w-5 h-5 rounded-full bg-[#8B5CF6]"></span>
              <p className="text-lg font-semibold">In Progress</p>
            </Flex>
            <div className="min-w-[23px] h-[20px] flex items-center justify-center text-colors-muted bg-white text-[12px] font-semibold rounded-full px-1">
              1
            </div>
          </Flex>
          {progressJobs.map((job, index) => (
            <div key={index} className="mb-4 w-full">
              <DashboardCard>
                <Flex gap="md" direction="col" justify="center" align="start">
                  <Flex
                    direction="row"
                    justify="between"
                    align="start"
                    gap="sm"
                    className="w-full"
                  >
                    <div className="text-base font-semibold">{job.title}</div>
                    <div className="text-base font-semibold">${job.price}</div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Image
                      src={job.userImage}
                      alt={job.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.name}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <ClockIcon size={15} className="text-[#8B5CF6]" />
                    <div className="text-[#8B5CF6] text-[13px] font-normal">
                      ${job.time}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <LocationIcon size={15} className="text-[#6B7280]" />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.location}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="between"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Button size="sm" variant="outline" className="w-full">
                      Add Note
                    </Button>
                    <Button
                      size="sm"
                      variant="none"
                      className="bg-[#8B5CF6] text-white w-full"
                    >
                      Complete
                    </Button>
                  </Flex>
                </Flex>
              </DashboardCard>
            </div>
          ))}
        </Flex>

        <Flex direction="col" justify="start" align="start" className="w-full">
          <Flex
            gap="sm"
            justify="between"
            direction="row"
            align="center"
            className="mb-4 w-full"
          >
            <Flex gap="md" justify="between" direction="row" align="center">
              <span className="w-5 h-5 rounded-full bg-[#10B981]"></span>
              <p className="text-lg font-semibold">Completed</p>
            </Flex>
            <div className="min-w-[23px] h-[20px] flex items-center justify-center text-colors-muted bg-white text-[12px] font-semibold rounded-full px-1">
              2
            </div>
          </Flex>
          {completeJobs.map((job, index) => (
            <div key={index} className="mb-4 w-full">
              <DashboardCard>
                <Flex gap="md" direction="col" justify="center" align="start">
                  <Flex
                    direction="row"
                    justify="between"
                    align="start"
                    gap="sm"
                    className="w-full"
                  >
                    <div className="text-base font-semibold">{job.title}</div>
                    <div className="text-base font-semibold">${job.price}</div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Image
                      src={job.userImage}
                      alt={job.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="text-colors-muted text-[13px] font-normal">
                      ${job.name}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="start"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <CheckIcon size={15} className="text-[#10B981]" />
                    <div className="text-[#10B981] text-[13px] font-normal">
                      ${job.time}
                    </div>
                  </Flex>
                  <Flex
                    direction="row"
                    justify="center"
                    align="center"
                    gap="sm"
                    className="w-full"
                  >
                    <Button size="sm" variant="outline" className="w-full">
                      View Invoices
                    </Button>
                  </Flex>
                </Flex>
              </DashboardCard>
            </div>
          ))}
        </Flex>
      </Grid>
    </div>
  );
}
